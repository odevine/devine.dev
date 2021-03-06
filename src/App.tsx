import React, { Component } from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import "./app.css";

class App extends Component {
  public render() {
    return (
      <Root>
        <div className="content">
          <React.Suspense fallback={" "}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    );
  }
}

export default App;
