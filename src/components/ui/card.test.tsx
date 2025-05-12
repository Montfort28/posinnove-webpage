import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './card';

// Mock useResponsive hook
jest.mock('@/hooks/useResponsive', () => ({
  useResponsive: () => ({
    isBelow: () => false,
  }),
}));

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    const { rerender } = render(
      <Card variant="default">Default Card</Card>
    );
    expect(screen.getByText('Default Card')).toHaveClass('bg-white', 'shadow-md');

    rerender(<Card variant="outline">Outline Card</Card>);
    expect(screen.getByText('Outline Card')).toHaveClass('border', 'border-gray-200');

    rerender(<Card variant="filled">Filled Card</Card>);
    expect(screen.getByText('Filled Card')).toHaveClass('bg-gray-50');
  });

  it('handles click events when onClick is provided', () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>Clickable Card</Card>
    );
    
    fireEvent.click(screen.getByText('Clickable Card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as anchor tag with correct props when href is provided', () => {
    render(
      <Card href="https://example.com">Link Card</Card>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom className correctly', () => {
    render(
      <Card className="custom-class">Custom Card</Card>
    );
    expect(screen.getByText('Custom Card')).toHaveClass('custom-class');
  });

  it('renders without animation when animate prop is false', () => {
    render(
      <Card animate={false}>Static Card</Card>
    );
    
    const card = screen.getByText('Static Card').parentElement;
    expect(card).not.toHaveAttribute('data-framer-motion');
  });
});