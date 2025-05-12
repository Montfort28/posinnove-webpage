import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';

// Mock FadeSection component
jest.mock('@/components/ui/fade-section', () => ({
  FadeSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('CTASection Component', () => {
  it('renders main heading and description', () => {
    render(<CTASection />);
    
    expect(screen.getByText(/Ready to Transform Your Institution's Learning Experience/)).toBeInTheDocument();
    expect(screen.getByText(/Join leading educational institutions/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons with correct links', () => {
    render(<CTASection />);
    
    const demoButton = screen.getByText('Book a Demo').closest('a');
    const startButton = screen.getByText('Get Started Now').closest('a');
    
    expect(demoButton).toHaveAttribute('href', 'https://calendly.com/posinnove/demo');
    expect(startButton).toHaveAttribute('href', 'https://app.posinnove.com/register');
    expect(demoButton).toHaveAttribute('target', '_blank');
    expect(startButton).toHaveAttribute('target', '_blank');
  });

  it('displays all feature items', () => {
    render(<CTASection />);
    
    const features = [
      'Quick and easy onboarding process',
      'Dedicated support team',
      'Flexible implementation options',
      'Regular platform updates',
    ];

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders testimonial section', () => {
    render(<CTASection />);
    
    expect(screen.getByText(/Posinnove has revolutionized/)).toBeInTheDocument();
    expect(screen.getByText('Dr. Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Education Director, ALX')).toBeInTheDocument();
  });

  it('includes check icons for feature items', () => {
    render(<CTASection />);
    
    const checkIcons = document.querySelectorAll('svg');
    expect(checkIcons.length).toBe(4); // One for each feature
  });
});