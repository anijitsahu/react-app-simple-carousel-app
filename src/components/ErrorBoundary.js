import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // static propTypes = {
  //     className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    console.log("Error and info is", error.toString(), " and info \n", info.componentStack)
    this.setState({ error, info, hasError: true })

  }

  render() {
    let { hasError, error, info } = this.state
    if (hasError == true) {
      return (
        <div className="error-div">
    			<div className="error-title">{error.toString()}</div>
    		</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;