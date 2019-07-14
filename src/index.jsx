import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {MainPage} from './Components/MainPage';

class App extends Component {
  render(){
    return (
      <div>
        <MainPage />
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root'),
)