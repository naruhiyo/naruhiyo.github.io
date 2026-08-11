import '@testing-library/jest-dom/vitest';
import '@src/i18n';
import i18n from '@src/i18n';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll } from 'vitest';

beforeAll(() => {
  i18n.changeLanguage('ja');
});

afterEach(() => {
  cleanup();
});
