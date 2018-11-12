import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
        nameValue: '',
        emailValue: '',
        messageValue: '',
        validName: true,
        validEmail: true,
        validMessage: true
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    // regex pattern to validate email
    const isValidEmail = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.emailValue));
    const isValidName = (this.state.nameValue !== '');
    const isValidMessage = (this.state.messageValue !== '');
    if(isValidEmail && isValidName && isValidMessage) {
      axios.get('https://www.mocky.io/v2/5bd89817310000c63a474f5b')
        .then(response => console.log(response));
    } else {
      e.preventDefault();
      if(!isValidName) this.setState({ validName: false });
      if(!isValidEmail) this.setState({ validEmail: false });
      if(!isValidMessage) this.setState({ validMessage: false });
    }
  }
  
  handleName (e) {
      this.setState({
          nameValue: e.target.value,
      })
  }

  handleEmail (e) {
    this.setState({
        emailValue: e.target.value,
    })
  }

  handleMessage (e) {
    this.setState({
        messageValue: e.target.value,
    })
  }

  // make buttons red if validX is false
  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <h2 className="formTitle">Contact Us</h2>
        <div className="sectionContainer-small sectionContainer">
          <label className="sectionText-small sectionText">Name</label>
          <input className="sectionInput-small sectionInput" type="text" value={this.state.nameValue} onChange={this.handleName}/>
        </div>
        <div className="sectionContainer-small sectionContainer">
          <label className="sectionText-small sectionText">Email</label>
          <input className="sectionInput-small sectionInput" type="text" value={this.state.emailValue} onChange={this.handleEmail}/>
        </div>
        <div className="sectionContainer-large sectionContainer">
          <label className="sectionText-large sectionText">Message</label>
          <textarea className="sectionInput-large sectionInput" type="text" value={this.state.messageValue} onChange={this.handleMessage}/>
        </div>
        <input className="submitButton" type="submit" value="Submit"/>
      </form>
    );
  }
}
