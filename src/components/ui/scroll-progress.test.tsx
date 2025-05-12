import { render, fireEvent, screen } from '@testing-library/react';
import { ScrollProgress } from './scroll-progress';

// Mock framer-motion hooks
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({
    scrollYProgress: { current: 0.5 },
  }),
  useSpring: () => ({ current: 0.5 }),
}));

describe('ScrollProgress Component', () => {
  beforeEach(() => {
    // Reset window.scrollY before each test
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  it('is not visible initially when scroll position is at top', () => {
    render(<ScrollProgress />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('becomes visible after scrolling down', () => {
    render(<ScrollProgress />);
    
    // Simulate scrolling down
    Object.defineProperty(window, 'scrollY', { value: 150 });
    fireEvent.scroll(window);

    const progressBar = document.querySelector('div');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass('bg-blue-600');
  });

  it('responds to scroll events correctly', () => {
    render(<ScrollProgress />);

    // Initially not visible
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    // Scroll down - should become visible
    Object.defineProperty(window, 'scrollY', { value: 200 });
    fireEvent.scroll(window);
    expect(document.querySelector('div')).toBeInTheDocument();

    // Scroll back to top - should hide
    Object.defineProperty(window, 'scrollY', { value: 0 });
    fireEvent.scroll(window);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('has correct styling and positioning', () => {
    render(<ScrollProgress />);
    
    Object.defineProperty(window, 'scrollY', { value: 150 });
    fireEvent.scroll(window);

    const progressBar = document.querySelector('div');
    expect(progressBar).toHaveClass('fixed', 'top-0', 'left-0', 'right-0');
  });
});