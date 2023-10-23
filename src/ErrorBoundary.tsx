import React from "react";
import { NotFound } from "./Pages";
interface PropsI {
  children?: React.ReactElement | React.ReactElement[];
}
interface StateI {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<PropsI, StateI> {
  constructor(props: PropsI) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if(this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children || [];
  }
}
