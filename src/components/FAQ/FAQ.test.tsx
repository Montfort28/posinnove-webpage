import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';

// Mock framer-motion and FadeSection
jest.mock('framer-motion', () => ({
  motion: {
   div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('@/components/ui/fade-section', () => ({
  FadeSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('FAQ Component', () => {
  it('renders the FAQ section title', () => {
    render(<FAQ />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<FAQ />);
    
    expect(screen.getByText('How does Posinnove help improve student employability?')).toBeInTheDocument();
    expect(screen.getByText('What support do institutions receive during implementation?')).toBeInTheDocument();
    expect(screen.getByText('Can Posinnove integrate with our existing systems?')).toBeInTheDocument();
  });

  it('expands and collapses FAQ items on click', () => {
    render(<FAQ />);
    
    // Initially, answer should not be visible
    const firstAnswer = screen.queryByText(/Posinnove connects students with real-world projects/);
    expect(firstAnswer).not.toBeVisible();
    
    // Click to expand
    const firstQuestion = screen.getByText('How does Posinnove help improve student employability?');
    fireEvent.click(firstQuestion);
    
    // Answer should now be visible
    expect(screen.getByText(/Posinnove connects students with real-world projects/)).toBeVisible();
    
    // Click again to collapse
    fireEvent.click(firstQuestion);
    expect(screen.queryByText(/Posinnove connects students with real-world projects/)).not.toBeVisible();
  });

  it('only allows one FAQ item to be open at a time', () => {
    render(<FAQ />);
    
    const questions = [
      'How does Posinnove help improve student employability?',
      'What support do institutions receive during implementation?'
    ];
    
    // Open first question
    fireEvent.click(screen.getByText(questions[0]));
    expect(screen.getByText(/Posinnove connects students with real-world projects/)).toBeVisible();
    
    // Open second question
    fireEvent.click(screen.getByText(questions[1]));
    
    // First answer should be hidden, second should be visible
    expect(screen.queryByText(/Posinnove connects students with real-world projects/)).not.toBeVisible();
    expect(screen.getByText(/We provide comprehensive support/)).toBeVisible();
  });

  it('renders contact support link', () => {
    render(<FAQ />);
    
    const supportLink = screen.getByText('Contact our support team');
    expect(supportLink).toHaveAttribute('href', 'https://posinnove.com/contact');
  });

  it('applies correct accessibility attributes', () => {
    render(<FAQ />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveClass('focus:ring-2', 'focus:ring-blue-500');
    });
  });
});