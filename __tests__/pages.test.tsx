import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Top } from '../src/pages/Top';
import { ActivityPage } from '../src/pages/Activities';
import { CollaboratorsPage } from '../src/pages/Collaborators';
import { ContactPage } from '../src/pages/ContactPage';
import { ProductsPage } from '../src/pages/Products';

vi.mock('@src/components/ActivityList', () => ({
  ActivityList: () => <div data-testid="activity-list">ActivityList</div>
}));

vi.mock('@src/components/CollaboratorList', () => ({
  CollaboratorList: () => <div data-testid="collaborator-list">CollaboratorList</div>
}));

vi.mock('@src/components/Contact', () => ({
  Contact: () => <div data-testid="contact">Contact</div>
}));

vi.mock('@src/components/ProductList', () => ({
  ProductList: () => <div data-testid="product-list">ProductList</div>
}));

vi.mock('@src/components/PageHeader', () => ({
  PageHeader: ({
    number,
    label,
    title,
    emphasis
  }: {
    number: string;
    label: string;
    title: string;
    emphasis: string;
  }) => (
    <div data-testid="page-header" data-number={number}>
      {number} {label} {title}
      <em>{emphasis}</em>
    </div>
  )
}));

describe('Top', () => {
  test('renders hero section with title', () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    expect(screen.getByText('Gourmet × Technology × Business')).toBeInTheDocument();
    expect(screen.getByText('Naru')).toBeInTheDocument();
    expect(screen.getByText('Hiyo')).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    expect(screen.getByText('美食とビジネスの交差点で、新たな価値を創造する')).toBeInTheDocument();
  });

  test('renders explore link with correct href', () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    const link = screen.getByText('Explore');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/collaborators');
  });

  test('renders hero rings', () => {
    const { container } = render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    const rings = container.querySelectorAll('.hero-ring');
    expect(rings.length).toBe(3);
  });
});

describe('ActivityPage', () => {
  test('renders page header with correct props', () => {
    render(
      <MemoryRouter>
        <ActivityPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/What We Do/);
    expect(header).toHaveTextContent(/Acti/);
    expect(header).toHaveTextContent(/vities/);
  });

  test('renders ActivityList component', () => {
    render(
      <MemoryRouter>
        <ActivityPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('activity-list')).toBeInTheDocument();
  });

  test('passes correct number to page header', () => {
    render(
      <MemoryRouter>
        <ActivityPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toHaveAttribute('data-number', '03');
  });
});

describe('CollaboratorsPage', () => {
  test('renders page header with correct props', () => {
    render(
      <MemoryRouter>
        <CollaboratorsPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/The Duo/);
    expect(header).toHaveTextContent(/Collabo/);
    expect(header).toHaveTextContent(/rators/);
  });

  test('renders CollaboratorList component', () => {
    render(
      <MemoryRouter>
        <CollaboratorsPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('collaborator-list')).toBeInTheDocument();
  });

  test('passes correct number to page header', () => {
    render(
      <MemoryRouter>
        <CollaboratorsPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toHaveAttribute('data-number', '01');
  });
});

describe('ContactPage', () => {
  test('renders contact section with correct class', () => {
    const { container } = render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const section = container.querySelector('.page-contact');
    expect(section).toBeInTheDocument();
  });

  test('renders Contact component', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });
});

describe('ProductsPage', () => {
  test('renders page header with correct props', () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Our Works/);
    expect(header).toHaveTextContent(/Pro/);
    expect(header).toHaveTextContent(/ducts/);
  });

  test('renders ProductList component', () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });

  test('passes correct number to page header', () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    const header = screen.getByTestId('page-header');
    expect(header).toHaveAttribute('data-number', '02');
  });
});
