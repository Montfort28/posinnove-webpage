"use client";
import { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
  isMenuOpen: boolean;
  activeTestimonialIndex: number;
  activeProjectSlide: number;
};

type Action = 
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_ACTIVE_TESTIMONIAL'; index: number }
  | { type: 'SET_ACTIVE_PROJECT_SLIDE'; index: number };

const initialState: State = {
  isMenuOpen: false,
  activeTestimonialIndex: 0,
  activeProjectSlide: 0,
};

const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'SET_ACTIVE_TESTIMONIAL':
      return { ...state, activeTestimonialIndex: action.index };
    case 'SET_ACTIVE_PROJECT_SLIDE':
      return { ...state, activeProjectSlide: action.index };
    default:
      return state;
  }
}

export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}