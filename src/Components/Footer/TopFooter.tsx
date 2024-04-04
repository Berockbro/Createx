import React, { Component } from 'react'
import FooterMenuElement from './FooterMenuElement'
import styled from './TopFooter.module.css'
import LinksMenu from '../Common-components/LinksMenu'
import GetInTouch from './GetInTouch'
import appstore from '../../img/app-store.png'
import googlePlay from '../../img/google-play.png'
import ButtonDownload from '../Common-components/buttonDownload'
import LinksIcons from '../Common-components/linksIcons'
import Twitter from '../../img/Twitter.png'
import FaceBook from '../../img/Facebook.png'
import Instagram from '../../img/Instagram.png'
type Props = {}

type State = {}

const menuShop = [
  {
      name: "New arrivals",
      src: "123"
  },
  {
    name: "Trending now",
    src: "123"
  },
  {
    name: "Sales",
    src: "123"
  },
  {
    name: "Brands",
    src: "123"
  }
]
const menuHelp = [
  {
      name: "Delivery & returns",
      src: "123"
  },
  {
    name: "FAQ",
    src: "123"
  },
  {
    name: "Track order",
    src: "123"
  },
  {
    name: "Contacts",
    src: "123"
  },
  {
    name: "Blog",
    src: "123"
  },
]
const getInTouch = [
  {
    text: "Call: ",
    inTouch: "(405) 555-0128"
  },
  {
    text: "Email: ",
    inTouch: "hello@createx.com"
  }
]
const linksIcons = [
  {
    href: "",
    src: FaceBook,
    alt: "FaceBook"
  },
  {
    href: "",
    src: Instagram,
    alt: "Instagram"
  },
  {
    href: "",
    src: Twitter,
    alt: "Twitter"
  },
  {
    href: "",
    src: Twitter,
    alt: "Twitter"
  },
  {
    href: "",
    src: Twitter,
    alt: "Twitter"
  },
  
]
export default class TopFooter extends Component<Props, State> {
  state = {}
  
  render() {
  
    return (
      <div className={styled.footerContainer}>
        <FooterMenuElement heading='HELP' component={<LinksMenu mas={menuHelp}/>}/>
        <FooterMenuElement heading='SHOP' component={<LinksMenu mas={menuShop}/>}/>
        <FooterMenuElement heading='GET IN TOUCH' component={
          <div>
            <GetInTouch mas={getInTouch}/>
            <LinksIcons mas={linksIcons}/>
          </div>
        }/>
        <FooterMenuElement heading='DOWNLOAD OUR APP' component={
          <div>
            <img src={appstore}></img>
            <img src={googlePlay}></img>
            
          </div>
        }/>
      </div>
    )
  }
}