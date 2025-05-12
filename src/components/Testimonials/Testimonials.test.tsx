import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

// Mock hooks
jest.mock('@/hooks/useImageOptimization', () => ({
  useImageOptimization: () => ({
    imageProps: {
      src: '/test-image.jpg',
      width: 64,
      height: 64,
    },
  }),
}));

describe('Testimonials Component', () => {
  it('renders section title and description', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('What Educational Institutions Say')).toBeInTheDocument();
    expect(screen.getByText(/Hear from our partner institutions/)).toBeInTheDocument();
  });

  it('renders correct number of testimonials', () => {
    render(<Testimonials />);
    
    const testimonialQuotes = screen.getAllByRole('blockquote');
    expect(testimonialQuotes).toHaveLength(3);
  });

  it('displays testimonial information correctly', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('Program Manager')).toBeInTheDocument();
    expect(screen.getByText('Educator')).toBeInTheDocument();
    expect(screen.getByText('ICT Chamber Academy')).toBeInTheDocument();
  });

  it('renders testimonial quotes', () => {
    render(<Testimonials />);
    
    expect(screen.getByText(/Posinnove helped us bring industry projects/)).toBeInTheDocument();
    expect(screen.getByText(/The platform simplified project tracking/)).toBeInTheDocument();
    expect(screen.getByText(/Since adopting Posinnove/)).toBeInTheDocument();
  });

  it('displays images with correct alt text', () => {
    render(<Testimonials />);
    
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('alt', "Program Manager's portrait");
    expect(images[1]).toHaveAttribute('alt', "Curriculum Lead's portrait");
    expect(images[2]).toHaveAttribute('alt', "Learning Director's portrait");
  });

  it('applies proper HTML structure for quotes', () => {
    render(<Testimonials />);
    
    const quotes = screen.getAllByRole('blockquote');
    quotes.forEach(quote => {
      expect(quote.textContent).toMatch(/^".*"$/); // Check for proper quote formatting
    });
  });
});