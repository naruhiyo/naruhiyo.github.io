const path = require("path")
const SRC_PATH = path.join(__dirname, "../src")
const STORIES_PATH = path.join(__dirname, "../stories")
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        },
        { loader: require.resolve("react-docgen-typescript-loader") }
      ]
    },
    {
      test: /\.(yml|yaml)$/,
      use: [{ loader: "json-loader" }, { loader: "yaml-loader" }]
    }
  )
  config.resolve.extensions.push(".ts", ".tsx", ".json", "yml")
  return config
}
