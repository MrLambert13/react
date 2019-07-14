import './Header.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import { Menu } from "../Menu";
const items = [
  {title: 'Home', href: '/'},
  {title: 'Gallery', href: '/gallery'},
  {title: 'News', href: '/news'},
  {title: 'Blog', href: '/blog'},
];

export class Header extends Component {
  render(){
    const {size} = this.props;
    const headerClasses = classNames ({
      header: true,
      'header-small': size === 'small',
      'header-big': size === 'big',
    });

    return(
      <header className={headerClasses}>
        <Menu items={items}/>
      </header>
    );
  }
}