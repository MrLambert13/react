import './MainPage.scss';
import React, { Component } from 'react';
import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';

export class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <div className="main_container">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}