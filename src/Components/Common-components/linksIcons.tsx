import React, { Component } from 'react'
import Icon from './Icon'
type IconsItem = {
  src: string;
  alt: string;
  href: string;
}

type Props = {
  mas: IconsItem[]
}

type State = {}

export default class LinksIcons extends Component<Props, State> {
  state = {}
  

  render() {
    const {mas} = this.props
    return (
        <ul>
          {mas.map((iconsItem, index)=>(
            <li key={index}>
                <Icon href={iconsItem.href} src={iconsItem.src} alt={iconsItem.alt}></Icon>
            </li>
          ))}
        </ul>
    )
  }
}