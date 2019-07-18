import './MainPage.scss';
import React, { Component } from 'react';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';

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