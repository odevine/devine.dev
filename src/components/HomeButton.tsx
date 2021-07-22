import React, { Component } from "react";

export interface HomeButtonProps {
  buttonText: string;
  linkRef?: string;
  onMouseOver: () => void;
}

export class HomeButton extends Component<HomeButtonProps> {
  public state = {};

  public render() {
    const { buttonText, linkRef, onMouseOver } = this.props;
    if (linkRef) {
      return (
        <a href={linkRef} className="homeButton" onMouseOver={onMouseOver}>
          <div>{buttonText}</div>
        </a>
      );
    } else {
      return (
        <div onMouseOver={onMouseOver} className="homeButton">
          {buttonText}
        </div>
      );
    }
  }
}
