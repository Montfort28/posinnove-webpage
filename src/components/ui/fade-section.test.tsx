import { render, screen } from '@testing-library/react';
import { FadeSection, FadeContainer } from './fade-section';

describe('FadeSection and FadeContainer Components', () => {
  it('renders FadeSection with children', () => {
    render(
      <FadeSection>
        <div>Test content</div>
      </FadeSection>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className to FadeSection', () => {
    render(
      <FadeSection className="custom-class">
        <div>Test content</div>
      </FadeSection>
    );
    
    expect(screen.getByText('Test content').parentElement).toHaveClass('custom-class');
  });

  it('renders FadeContainer with children', () => {
    render(
      <FadeContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </FadeContainer>
    );
    
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies correct animation variants based on direction', () => {
    const { rerender } = render(
      <FadeSection direction="up">
        <div>Test content</div>
      </FadeSection>
    );
    
    let element = screen.getByText('Test content').parentElement;
    expect(element).toHaveStyle({ transform: 'translateY(20px)' });
    
    rerender(
      <FadeSection direction="left">
        <div>Test content</div>
      </FadeSection>
    );
    
    element = screen.getByText('Test content').parentElement;
    expect(element).toHaveStyle({ transform: 'translateX(20px)' });
  });

  it('handles delay prop correctly', () => {
    render(
      <FadeSection delay={0.5}>
        <div>Test content</div>
      </FadeSection>
    );
    
    const element = screen.getByText('Test content').parentElement;
    expect(element).toHaveStyle({ transitionDelay: '0.5s' });
  });
});