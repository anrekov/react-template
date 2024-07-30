import { Component, ErrorInfo, ReactNode } from 'react';

type TProps = {
  children?: ReactNode;
};

type TState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<TProps, TState> {
  public state = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}
