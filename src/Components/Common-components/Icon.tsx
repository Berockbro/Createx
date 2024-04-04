import React, { Component } from 'react'

type Props = {
  src: string
  alt: string
  href: string
}

type State = {}

export default class Icon extends Component<Props, State> {
  state = {}

  render() {
    return (
      <a href={this.props.href}>
        <div>
          <img src={this.props.src} alt={this.props.alt}></img>
        </div>
      </a>
    )
  }
}