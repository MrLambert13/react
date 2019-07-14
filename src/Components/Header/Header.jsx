import './Header.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import { Menu } from "../Menu";
const items = [
  { title: 'Home', href: '/' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'News', href: '/news' },
  { title: 'Blog', href: '/blog' },
  { title: 'Login', href: '/login' },
];

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu items={items} />
      </header>
    );
  }
}