import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import i18n from '../src/i18n';

describe('Header', () => {
  beforeEach(() => {
    i18n.changeLanguage('ja');
    window.localStorage.removeItem('locale');
  });

  test('renders navigation labels in Japanese by default', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('ホーム')).toBeInTheDocument();
    expect(screen.getByText('プロダクト')).toBeInTheDocument();
    expect(screen.getByText('コンタクト')).toBeInTheDocument();
  });

  test('toggles locale to English on click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: '言語を切り替える' }));
    fireEvent.click(screen.getByRole('option', { name: 'English' }));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
    expect(window.localStorage.getItem('locale')).toBe('en');
  });
});
