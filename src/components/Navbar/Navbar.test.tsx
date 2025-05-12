import { render, screen, fireEvent, act } from '@/utils/test-utils';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const mockScrollToSection = jest.fn();

  beforeEach(() => {
    // Reset mock before each test
    mockScrollToSection.mockClear();
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    });
  });

  it('renders logo and navigation links', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    // Check for logo
    expect(screen.getByText('Posinnove')).toBeInTheDocument();
    
    // Check for navigation links
    expect(screen.getByText('Explore Program')).toBeInTheDocument();
    expect(screen.getByText('Learning')).toBeInTheDocument();
    expect(screen.getByText('Institutions')).toBeInTheDocument();
  });

  it('handles mobile menu toggle', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    // Initially menu should be hidden on mobile
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    
    // Click hamburger button
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    
    // Menu should now be visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Click again to close
    fireEvent.click(menuButton);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('calls scrollToSection when nav links are clicked', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    const exploreLink = screen.getByText('Explore Program');
    fireEvent.click(exploreLink);
    
    expect(mockScrollToSection).toHaveBeenCalledWith('educators');
  });

  it('changes background on scroll', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('bg-white shadow-sm');
    
    // Simulate scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100 });
      fireEvent.scroll(window);
    });
    
    expect(navbar).toHaveClass('bg-white shadow-md');
  });

  it('renders correct external links', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    const aboutLink = screen.getByText('About Us');
    expect(aboutLink).toHaveAttribute('href', 'https://www.posinnove.com/about');
    expect(aboutLink).toHaveAttribute('target', '_blank');
  });

  it('closes mobile menu when link is clicked', () => {
    render(<Navbar scrollToSection={mockScrollToSection} />);
    
    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    
    // Click a link
    const link = screen.getByText('Explore Program');
    fireEvent.click(link);
    
    // Menu should be closed
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});