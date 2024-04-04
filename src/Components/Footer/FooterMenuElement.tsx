import React, { Component, ReactNode } from 'react'

type Props = {
    heading: string
    component?: ReactNode
}

type State = {}

export default class FooterMenuElement extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3> 
            {this.props.component}
      </div>
    )
  }
}