import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
        nameValue: '',
        emailValue: '',
        messageValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
      console.log('Form value: ' + this.state.inputValue);
      // prevent default only in case of if invalid form
      e.preventDefault();
  }
  
  handleChange (e) {
      this.setState({
          inputValue: e.target.value,
          emailValue: e.target.value,
          messageValue: e.target.value
      })
  }

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit.bind(this)}>
        <h2 className="formTitle">Contact Us</h2>
        <div className="smallSectionContainer">
          <label className="smallSectionText">Name</label>
          <input className="smallSectionInput" type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="smallSectionContainer">
          <label className="smallSectionText">Email</label>
          <input className="smallSectionInput" type="text" value={this.state.emailValue} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="largeSectionContainer">
          <label className="largeSectionText">Message</label>
          <input className="largeSectionInput" type="text" value={this.state.messageValue} onChange={this.handleChange.bind(this)}/>
        </div>
        <input className="submitButton" type="submit" value="Submit"/>
      </form>
    );
  }
}
