import React, { Component } from 'react'
import TopFooter from './TopFooter'
import BotFooter from './BotFooter'
import styled from './Footer.module.css'
type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styled.container}>
        <TopFooter/>
        <hr className={styled.hr}></hr>
        <BotFooter/>
      </div>
    )
  }
}


