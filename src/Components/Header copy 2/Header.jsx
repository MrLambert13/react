import './Header.scss';
import React, { Component } from 'react';
import classNames from 'classnames';

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
        Size: {size}
      </header>
    );
  }
}