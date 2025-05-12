import { render, screen } from '@testing-library/react';
import SuccessStories from './SuccessStories';

// Mock hooks
jest.mock('@/hooks/useImageOptimization', () => ({
  useImageOptimization: () => ({
    imageProps: {
      src: '/test-image.jpg',
      width: 400,
      height: 300,
    },
  }),
}));

describe('SuccessStories Component', () => {
  it('renders section title and description', () => {
    render(<SuccessStories />);
    
    expect(screen.getByText('Institution Success Stories')).toBeInTheDocument();
    expect(screen.getByText(/achieving remarkable results/)).toBeInTheDocument();
  });

  it('renders correct number of success stories', () => {
    render(<SuccessStories />);
    
    const storyCards = screen.getAllByText(/Success Story/);
    expect(storyCards).toHaveLength(2);
  });

  it('displays institution names correctly', () => {
    render(<SuccessStories />);
    
    expect(screen.getByText('ICT Chamber Academy')).toBeInTheDocument();
    expect(screen.getByText('University of Rwanda')).toBeInTheDocument();
  });

  it('shows results for each story', () => {
    render(<SuccessStories />);
    
    expect(screen.getByText(/38% increase in student employability/)).toBeInTheDocument();
    expect(screen.getByText(/Expanded from 2 to 8 departments/)).toBeInTheDocument();
  });

  it('includes read more links for each story', () => {
    render(<SuccessStories />);
    
    const readMoreLinks = screen.getAllByText('Read full case study');
    expect(readMoreLinks).toHaveLength(2);
  });

  it('renders request more cases button', () => {
    render(<SuccessStories />);
    
    expect(screen.getByText('Request More Case Studies')).toBeInTheDocument();
  });

  it('displays correct images with alt text', () => {
    render(<SuccessStories />);
    
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('alt', 'ICT Chamber Academy');
    expect(images[1]).toHaveAttribute('alt', 'University of Rwanda');
  });
});