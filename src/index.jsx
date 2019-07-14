import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Header} from './Components/Header';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root'),
)