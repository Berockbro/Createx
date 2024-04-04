import React, { Component } from 'react'
import ButtonToCopy from '../Common-components/buttonToCopy';

type MenuItem = {
  text: string;
  inTouch: string;
}

type Props = {
  mas: MenuItem[];
}
type State = {}
export default class GetInTouch extends Component<Props, State> {
  state = {}

  render() {
    const { mas } = this.props;
    
    return (
      <ul>
          {mas.map((menuItem, index) => (
              <li key={index}>
                  <div>{menuItem.text}</div>
                  <ButtonToCopy text={menuItem.inTouch}/>
              </li>
          ))}
      </ul>
    )
  }
}