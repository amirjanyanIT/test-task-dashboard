import React from "react";
import { GlobalStyles } from "./GlobalStyles";

export class ErrorBoundary extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {}

  componentDidCatch() {}

  render() {
    return <div className="error-404"><GlobalStyles />Page not found</div>;
  }
}
