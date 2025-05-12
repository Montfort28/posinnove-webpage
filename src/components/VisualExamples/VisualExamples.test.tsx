import { render, screen } from '@testing-library/react';
import VisualExamples from './VisualExamples';

// Mock hooks
jest.mock('@/hooks/useResponsive', () => ({
  useResponsive: () => ({
    isBelow: () => false,
  }),
}));

jest.mock('@/hooks/useImageOptimization', () => ({
  useImageOptimization: () => ({
    imageProps: {
      src: '/test-image.jpg',
      width: 400,
      height: 300,
    },
  }),
}));

describe('VisualExamples Component', () => {
  it('renders section title and description', () => {
    render(<VisualExamples />);
    
    expect(screen.getByText('Partner with Posinnove')).toBeInTheDocument();
    expect(screen.getByText(/Interested in joining our mission/)).toBeInTheDocument();
  });

  it('renders correct number of gallery items', () => {
    render(<VisualExamples />);
    
    const galleryImages = screen.getAllByRole('img');
    expect(galleryImages).toHaveLength(6);
  });

  it('renders CTA card with correct content', () => {
    render(<VisualExamples />);
    
    expect(screen.getByText('Ready to Collaborate?')).toBeInTheDocument();
    expect(screen.getByText('Book a Call')).toBeInTheDocument();
  });

  it('renders images with correct alt text', () => {
    render(<VisualExamples />);
    
    const images = screen.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt', `Collaboration example ${index + 1}`);
    });
  });

  it('includes correct link to calendly', () => {
    render(<VisualExamples />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://calendly.com/your-link');
    expect(link).toHaveAttribute('target', '_blank');
  });
});