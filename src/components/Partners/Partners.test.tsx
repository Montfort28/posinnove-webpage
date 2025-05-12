import { render, screen } from '@testing-library/react';
import Partners from './Partners';

// Mock hooks and components
jest.mock('@/hooks/useImageOptimization', () => ({
  useImageOptimization: () => ({
    imageProps: {
      src: '/test-image.jpg',
      width: 160,
      height: 100,
    },
  }),
}));

jest.mock('@/components/ui/fade-section', () => ({
  FadeSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FadeContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('Partners Component', () => {
  it('renders section title and description', () => {
    render(<Partners />);
    
    expect(screen.getByText('Trusted by Leading Institutions')).toBeInTheDocument();
    expect(screen.getByText(/Join the growing network/)).toBeInTheDocument();
  });

  it('renders all partner logos', () => {
    render(<Partners />);
    
    expect(screen.getByRole('img', { name: 'University of Rwanda' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Partner 1' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Umurava' })).toBeInTheDocument();
  });

  it('applies grayscale effect to logos', () => {
    render(<Partners />);
    
    const logos = screen.getAllByRole('img');
    logos.forEach(logo => {
      const container = logo.parentElement;
      expect(container).toHaveClass('grayscale');
    });
  });

  it('renders footer text', () => {
    render(<Partners />);
    
    expect(screen.getByText(/And many more institutions across Africa/)).toBeInTheDocument();
  });

  it('uses correct image optimization props', () => {
    render(<Partners />);
    
    const logos = screen.getAllByRole('img');
    logos.forEach(logo => {
      expect(logo).toHaveClass('object-contain', 'w-full', 'h-full');
    });
  });

  it('renders in correct layout grid', () => {
    render(<Partners />);
    
    const grid = screen.getAllByRole('img')[0].parentElement?.parentElement?.parentElement;
    expect(grid).toHaveClass('grid', 'grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
  });
});