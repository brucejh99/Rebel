import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  /* Other content above and below form. Insert the form anywhere on the page. Form was designed to always accept the same information with customizable API urls */
  render() {
    return (
      <div className="shift">
        <Form successUrl='https://www.mocky.io/v2/5bd89817310000c63a474f5b' failUrl='https://www.mocky.io/v2/5bd897fc310000c73a474f59' />
      </div>
    );
  }
}

export default App;
