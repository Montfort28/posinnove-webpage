import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { GlobalStateProvider } from '@/contexts/GlobalStateContext';

function render(ui: React.ReactElement, { ...options } = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <GlobalStateProvider>
        {children}
      </GlobalStateProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { render };