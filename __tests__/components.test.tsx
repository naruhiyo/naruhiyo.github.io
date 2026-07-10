import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  test('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/NaruHiyo/)).toBeInTheDocument();
  });
});
