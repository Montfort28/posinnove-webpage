import { render, screen, fireEvent } from '@testing-library/react';
import { ImageErrorBoundary } from './image-error-boundary';

describe('ImageErrorBoundary', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 200,
    height: 200,
  };

  it('renders image correctly with valid props', () => {
    render(<ImageErrorBoundary {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('shows fallback UI when image fails to load', () => {
    render(<ImageErrorBoundary {...defaultProps} />);
    const img = screen.getByRole('img');
    
    // Simulate image load error
    fireEvent.error(img);
    
    expect(screen.getByText('Image failed to load')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('applies custom className to both image and error state', () => {
    const { rerender } = render(
      <ImageErrorBoundary {...defaultProps} className="custom-class" />
    );
    
    expect(screen.getByRole('img')).toHaveClass('custom-class');
    
    // Test error state
    rerender(
      <ImageErrorBoundary {...defaultProps} className="custom-class" />
    );
    const img = screen.getByRole('img');
    fireEvent.error(img);
    
    expect(screen.getByText('Image failed to load').parentElement?.parentElement)
      .toHaveClass('custom-class');
  });

  it('handles priority prop correctly', () => {
    render(<ImageErrorBoundary {...defaultProps} priority />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('fetchpriority', 'high');
  });
});