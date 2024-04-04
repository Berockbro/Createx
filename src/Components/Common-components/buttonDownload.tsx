import React, { Component } from 'react'
import styles from './ButtonDownload.module.css'
type Props = {
    topText?: string
    botText?: string
    srcImage?: string 
}

type State = {}

export default class ButtonDownload extends Component<Props, State> {
  state = {}

  render() {
    return (
      
      <button className={styles.button}>
        <img className={styles.img} src={this.props.srcImage} alt='Изображение отсутствует'/>
        <div className={styles.textbox}>
            <div>{this.props.topText}</div>
            <div>{this.props.botText}</div>
        </div>
        
      </button>

    )
  }
}