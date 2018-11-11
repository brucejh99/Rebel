import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Name</label>
              <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
              <label>Email</label>
              <input type="text" value={this.state.emailValue} onChange={this.handleChange.bind(this)}/>
              <label>Message</label>
              <input type="text" value={this.state.messageValue} onChange={this.handleChange.bind(this)}/>
              <input type="submit" value="Submit"/>
      </form>
    );
  }
}
