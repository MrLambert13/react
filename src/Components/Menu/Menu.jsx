import './Menu.scss';
import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="menu">
        {items.map(
          (elem) => <li className="menu_li"><a href={elem.href}>{elem.title}</a></li>
        )}
      </ul>
    );
  }
}