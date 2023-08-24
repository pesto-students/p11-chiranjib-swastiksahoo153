import React, { Component } from "react";

export function WithLogging(OriginalComponent) {
  class Wrapper extends Component {
    render() {
      console.log("Component rendered");
      return <OriginalComponent />;
    }
  }

  return Wrapper;
}

export default WithLogging;
