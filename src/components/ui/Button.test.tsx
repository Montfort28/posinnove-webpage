import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600'); // primary variant
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-100');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline')).toHaveClass('border-blue-600');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('py-2 px-4 text-sm');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('py-3 px-8 text-lg');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with icon when provided', () => {
    render(
      <Button icon={<span data-testid="test-icon">icon</span>}>
        With Icon
      </Button>
    );
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});