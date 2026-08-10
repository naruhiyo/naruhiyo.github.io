import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '../src/pages/NotFound';
import i18n from '../src/i18n';

describe('NotFound', () => {
  beforeEach(() => {
    i18n.changeLanguage('ja');
  });

  test('renders 404 page header', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('ページが見つかりません')).toBeInTheDocument();
    expect(screen.getByText('Not')).toBeInTheDocument();
    expect(screen.getByText('Found')).toBeInTheDocument();
  });

  test('renders Japanese message and back link by default', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('お探しのページは見つかりませんでした。')).toBeInTheDocument();
    const back = screen.getByRole('link', { name: 'ホームへ戻る' });
    expect(back.getAttribute('href')).toBe('/');
  });

  test('switches to English message when locale changes', async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    await i18n.changeLanguage('en');

    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return Home' })).toBeInTheDocument();
  });
});
