'use client';
import React from 'react';
import { Button } from './Button';
import { AlertTriangleIcon } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangleIcon className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="primary"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}