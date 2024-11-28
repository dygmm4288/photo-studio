import React from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.hasError && !prevState.hasError) {
      this.props.navigate("/");
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>오류가 발생했습니다. 잠시 후 홈으로 이동합니다.</h1>;
    }

    return this.props.children;
  }
}

const ErrorBoundaryWithNavigate = (props) => {
  const navigate = useNavigate();
  return <ErrorBoundary {...props} navigate={navigate} />;
};

export default ErrorBoundaryWithNavigate;
