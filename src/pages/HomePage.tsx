import React, { Component } from "react";
import TextTransition from "react-text-transition";
import Img from "react-optimized-image";
import profile from "images/ode.png";
import { TransitionButton } from "components";

export class HomePage extends Component {
  public state = {
    headerMatrixIndex: 0,
  };

  // TODO: make this data structure less awful in the future
  private buttonContent: Array<{
    text: string;
    link?: string;
    transitionArray: Array<string>;
  }> = [
    {
      text: "me",
      transitionArray: ["", "o", "w", "e", "n", " ", "d", "e", "v", "i", "n", "e", ""],
    },
    {
      text: "website",
      link: "https://owen.devine.dev",
      transitionArray: ["", "o", "w", "e", "n", ".", "d", "e", "v", "i", "n", "e", ".dev"],
    },
    {
      text: "contact",
      link: "mailto: owen@devine.dev",
      transitionArray: ["", "o", "w", "e", "n", "@", "d", "e", "v", "i", "n", "e", ".dev"],
    },
    {
      text: "github",
      link: "https://github.com/odevine",
      transitionArray: ["", "o", "", "", "", "", "d", "e", "v", "i", "n", "e", ""],
    },
    {
      text: "twitter",
      link: "https://twitter.com/ondvn",
      transitionArray: ["@", "o", "", "", "n", "", "d", "", "v", "", "n", "", ""],
    },
    {
      text: "discord",
      transitionArray: ["", "o", "", "", "", "", "d", "e", "", "", "", "", "#0001"],
    },
  ];

  private changeHeaderMatrixIndex(index: number) {
    this.setState({ headerMatrixIndex: index });
  }

  public render() {
    const textTransitions = this.buttonContent[0].transitionArray.map((column, index) => {
      // HACK: react-text-transition does not take spaces as a literal character as they are div-wrapped
      // HACK: so this is just to create a faux-space after "owen" and before "devine"
      if (this.state.headerMatrixIndex === 0 && index === 4) {
        return (
          <TextTransition
            inline
            key={index}
            springConfig={{ mass: 1, tension: 300, friction: 26, clamp: true }}
            style={{ marginRight: "0.25em" }}
            text={this.buttonContent[this.state.headerMatrixIndex].transitionArray[index]}
          />
        );
      } else {
        return (
          <TextTransition
            inline
            key={index}
            springConfig={{ mass: 1, tension: 300, friction: 26, clamp: true }}
            text={this.buttonContent[this.state.headerMatrixIndex].transitionArray[index]}
          />
        );
      }
    });

    return (
      <>
        <Img src={profile} alt="A picture of me" sizes={[400]}></Img>
        <div style={{ textAlign: "center" }}>
          <h1>{textTransitions}</h1>
          {this.buttonContent.map((button, index) => (
            <TransitionButton key={index} onMouseOver={() => this.changeHeaderMatrixIndex(index)} buttonText={button.text} linkRef={button.link} />
          ))}
        </div>
      </>
    );
  }
}