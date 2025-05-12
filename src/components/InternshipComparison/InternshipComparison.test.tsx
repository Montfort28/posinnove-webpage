import { render, screen } from '@testing-library/react';
import InternshipComparison from './InternshipComparison';

describe('InternshipComparison Component', () => {
  it('renders modern internship section', () => {
    render(<InternshipComparison />);
    
    expect(screen.getByText('Modernize internships')).toBeInTheDocument();
    expect(screen.getByText('Fully remote, work with students from anywhere')).toBeInTheDocument();
  });

  it('renders traditional internship section', () => {
    render(<InternshipComparison />);
    
    expect(screen.getByText('Traditional internships')).toBeInTheDocument();
    expect(screen.getByText('Often in-person, creating geographical limitations and commuting costs')).toBeInTheDocument();
  });

  it('displays correct number of points for each section', () => {
    render(<InternshipComparison />);
    
    const checkIcons = screen.getAllByTestId(/check/i);
    const xIcons = screen.getAllByTestId(/x/i);
    
    expect(checkIcons).toHaveLength(4); // Modern internship points
    expect(xIcons).toHaveLength(4); // Traditional internship points
  });

  it('applies correct styling to sections', () => {
    render(<InternshipComparison />);
    
    const modernSection = screen.getByText('Modernize internships').closest('div');
    const traditionalSection = screen.getByText('Traditional internships').closest('div');
    
    expect(modernSection).toHaveClass('bg-gradient-to-tr', 'from-blue-300', 'to-blue-500');
    expect(traditionalSection).toHaveClass('bg-gradient-to-tr', 'from-blue-100', 'to-blue-300');
  });

  it('renders check/x icons with correct colors', () => {
    render(<InternshipComparison />);
    
    const modernIcon = screen.getAllByTestId(/check/i)[0];
    const traditionalIcon = screen.getAllByTestId(/x/i)[0];
    
    expect(modernIcon.parentElement).toHaveClass('bg-blue-600');
    expect(traditionalIcon.parentElement).toHaveClass('bg-gray-400');
  });
});