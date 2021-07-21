import React, { Component } from "react";

export interface TransitionButtonProps {
  buttonText: string;
  linkRef?: string;
  onMouseOver: () => void;
}

export class TransitionButton extends Component<TransitionButtonProps> {
  public state = {};

  public render() {
    const { buttonText, linkRef, onMouseOver } = this.props;
    if (linkRef) {
      return (
        <div onMouseOver={onMouseOver} className="homeButton">
          <a href={linkRef}>{buttonText}</a>
        </div>
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
