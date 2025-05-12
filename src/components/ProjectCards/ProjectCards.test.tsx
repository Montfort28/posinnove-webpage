import { render, screen, act, waitFor } from '@/utils/test-utils';
import { fireEvent } from '@testing-library/react';
import ProjectCards from './ProjectCards';

// Mock the hooks
jest.mock('@/hooks/useResponsive', () => ({
  useResponsive: () => ({
    isBelow: jest.fn(() => false),
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

describe('ProjectCards Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with initial projects', () => {
    render(<ProjectCards />);
    expect(screen.getByText('See Projects That You Can Assign to Your Students')).toBeInTheDocument();
    expect(screen.getByText('20+ Web/UI/UX projects')).toBeInTheDocument();
  });

  it('shows correct number of projects per slide based on screen size', () => {
    render(<ProjectCards />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards).toHaveLength(3); // Desktop view shows 3 cards
  });

  it('changes slides automatically', async () => {
    render(<ProjectCards />);
    
    const initialProject = screen.getByText('20+ Web/UI/UX projects');
    expect(initialProject).toBeInTheDocument();

    // Fast-forward 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Wait for the next slide
    await waitFor(() => {
      expect(screen.queryByText('20+ Web/UI/UX projects')).not.toBeInTheDocument();
    });
  });

  it('allows manual slide navigation', () => {
    render(<ProjectCards />);
    
    const slideButtons = screen.getAllByRole('button');
    fireEvent.click(slideButtons[1]); // Click second slide button
    
    expect(screen.queryByText('20+ Web/UI/UX projects')).not.toBeInTheDocument();
  });

  it('displays project categories correctly', () => {
    render(<ProjectCards />);
    expect(screen.getByText('Design')).toBeInTheDocument();
  });

  it('shows view all button for each project', () => {
    render(<ProjectCards />);
    const viewAllButtons = screen.getAllByText('View All');
    expect(viewAllButtons.length).toBeGreaterThan(0);
  });
});