#!/bin/bash
set -uo pipefail

BLOCKER=0
HIGH=0
MEDIUM=0
LOW=0

COMMIT_RANGE="origin/HEAD..HEAD"
DIFF=$(git diff "$COMMIT_RANGE" 2>/dev/null || git diff --cached)
DIFF_STAT=$(git diff "$COMMIT_RANGE" --stat 2>/dev/null || git diff --cached --stat)

echo "🔍 AI Code Review (severity: Blocker > High > Medium > Low)"
echo ""

if [ -z "$DIFF" ]; then
  echo "No changes to review."
  exit 0
fi

echo "Changes:"
echo "$DIFF_STAT"
echo ""

############################################
# BLOCKER checks (exit code 1 if found)
############################################

# Secrets / API keys
if echo "$DIFF" | grep -inP '(api[_-]?key|api[-_]?secret|password|auth[-_]?token|bearer|credential|secret)\s*[:=]\s*['"'"'"`]?[A-Za-z0-9_\-\.]{16,}' 2>/dev/null | grep -vE '(example|sample|test|dummy|placeholder|your-|xxxx|npm_token|GITHUB_TOKEN)' > /dev/null 2>&1; then
  echo "❌ [BLOCKER] Possible secrets/credentials leaked in diff"
  BLOCKER=1
fi

# Private key files
if echo "$DIFF" | grep -in 'BEGIN\s\(RSA\sPRIVATE\|DSA\sPRIVATE\|EC\sPRIVATE\|OPENSSH\sPRIVATE\|PRIVATE\)\sKEY' > /dev/null 2>&1; then
  echo "❌ [BLOCKER] Private key detected in diff"
  BLOCKER=1
fi

# .env files
for f in $(echo "$DIFF" | grep '^diff --git' | sed 's/.* b\///'); do
  if echo "$f" | grep -q '\.env$' && ! echo "$f" | grep -q '\.env\.example$|\.env\.sample$'; then
    echo "❌ [BLOCKER] .env file committed: $f"
    BLOCKER=1
  fi
done

############################################
# HIGH checks (block push if found)
############################################

# console.log/debugger in non-test files
HIGH_FILES=$(echo "$DIFF" | grep '^diff --git.* b/' | sed 's/.* b\///' | grep -vE '__tests__|\.test\.|\.spec\.|example/|\.md$')
while IFS= read -r f; do
  [ -z "$f" ] && continue
  FILE_DIFF=$(echo "$DIFF" | sed -n "/^diff --git.* b\/$f/,/^diff --git/p" | head -n -1)
  if echo "$FILE_DIFF" | grep -n '^\+\s*console\.\(log\|debug\|warn\|error\)' | grep -vE '//\s*(TODO|FIXME|HACK|XXX|todo)' > /dev/null 2>&1; then
    echo "⚠️  [HIGH] console.log/debug in $f (remove before push)"
    HIGH=1
  fi
  if echo "$FILE_DIFF" | grep -n '^\+\s*debugger' > /dev/null 2>&1; then
    echo "⚠️  [HIGH] debugger statement in $f"
    HIGH=1
  fi
  if echo "$FILE_DIFF" | grep -n '^\+\s*\/\/\s*TODO' > /dev/null 2>&1; then
    echo "ℹ️  [MEDIUM] TODO comment added in $f"
    MEDIUM=1
  fi
done <<< "$HIGH_FILES"

# Large binary files
if echo "$DIFF_STAT" | grep -v 'bin /dev/null' | awk '{print $4}' | grep -E '[0-9]+\+' | sed 's/+//' | awk '{if ($1 > 500) print}' | grep -q . > /dev/null 2>&1; then
  echo "⚠️  [HIGH] Large file changes (>500 lines) detected - consider splitting"
  HIGH=1
fi

############################################
# MEDIUM checks
############################################

# Long lines in source code
if echo "$DIFF" | grep -n '^+.' | grep -vE '^\+\s*\/\/|^\+\s*\*|^\+\s*<!--|^\+\s*\#|^\+$' | awk 'length($0) > 150' | head -5 > /dev/null 2>&1; then
  echo "ℹ️  [MEDIUM] Lines over 150 chars detected"
  MEDIUM=1
fi

# Merge commits
if git log --oneline -1 HEAD | grep -q '^Merge'; then
  echo "ℹ️  [MEDIUM] Merge commit detected - verify no unintended changes"
  MEDIUM=1
fi

############################################
# LOW checks
############################################

# package.json changes
if echo "$DIFF" | grep '^diff --git.*package.json' > /dev/null 2>&1; then
  echo "💡 [LOW] package.json modified - verify dependency changes"
  LOW=1
fi

# lockfile changes without package.json
if echo "$DIFF" | grep '^diff --git.*pnpm-lock.yaml' > /dev/null 2>&1; then
  if ! echo "$DIFF" | grep '^diff --git.*package.json' > /dev/null 2>&1; then
    echo "💡 [LOW] Lockfile changed without package.json - run pnpm install"
    LOW=1
  fi
fi

############################################
# Summary
############################################
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Review Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
[ $BLOCKER -eq 1 ] && echo "  ❌ Blocker : issues found" || echo "  ✅ Blocker : none"
[ $HIGH -eq 1 ] && echo "  ❌ High    : issues found" || echo "  ✅ High    : none"
[ $MEDIUM -eq 1 ] && echo "  ⚠️  Medium  : issues found" || echo "  ✅ Medium  : none"
[ $LOW -eq 1 ] && echo "  💡 Low     : suggestions" || echo "  ✅ Low     : none"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $BLOCKER -eq 1 ] || [ $HIGH -eq 1 ]; then
  echo "❌ Blocker or High severity issues found. Push blocked."
  echo "   Fix the issues above and try again."
  exit 1
fi

echo "✅ Review passed. No Blocker or High severity issues."
exit 0
