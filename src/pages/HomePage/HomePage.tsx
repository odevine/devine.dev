import React, { Component } from 'react'
import ReactTextTransition from "react-text-transition";

export class HomePage extends Component {
  state = {
    headerMatrixIndex: 0
  }

  headerMatrix = [
    ["", "O", "we", "n", " ", "D", "e", "v", "i", "n", "e", "",],
    ["", "o", "we", "n", ".", "d", "e", "v", "i", "n", "e", ".dev",],
    ["", "o", "we", "n", "@", "d", "e", "v", "i", "n", "e", ".dev",],
    ["", "o", "", "", "", "d", "e", "v", "i", "n", "e", "",],
    ["@", "o", "", "n", "", "d", "", "v", "", "n", "", "",],
  ]

  changeHeaderMatrixIndex(index: number) {
    this.setState({ headerMatrixIndex: index});
  }

  

  render() {
    const textTransitions = this.headerMatrix[0].map((column, index) => {
      if (this.state.headerMatrixIndex === 0 && index === 3) {
        return (
          <ReactTextTransition
            style={{ marginRight: "0.3em"}}
            inline
            text={this.headerMatrix[this.state.headerMatrixIndex][index]}
          />
        );
      }

      return (
        <ReactTextTransition
          inline
          text={this.headerMatrix[this.state.headerMatrixIndex][index]}
        />
      );
    });

    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          {textTransitions}
        </h1>
        <div onMouseOver={() => this.changeHeaderMatrixIndex(0)}>
          me
        </div>
        <div onMouseOver={() => this.changeHeaderMatrixIndex(1)}>
          <a href="https://owen.devine.dev">
            website
          </a>
        </div>
        <div onMouseOver={() => this.changeHeaderMatrixIndex(2)}>
          <a href="mailto: owen@devine.dev">
            contact
          </a>
        </div>
        <div onMouseOver={() => this.changeHeaderMatrixIndex(3)}>
          <a href="https://github.com/odevine">
            github
          </a>
        </div>
        <div onMouseOver={() => this.changeHeaderMatrixIndex(4)}>
          <a href="https://twitter.com/ondvn">
            twitter
          </a>
        </div>
      </div>
    )
  }
}