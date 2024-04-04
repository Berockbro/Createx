import React, { Component } from 'react';

type Props = {
  text: string;
}

export default class TextToCopy extends Component<Props> {

  copyToClipboard = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text)
      .catch(err => console.error('Failed to copy:', err));
  };

  render() {
    const { text } = this.props;
    return (
      <span onClick={this.copyToClipboard} >
        {text}
      </span>
    );
  }
}