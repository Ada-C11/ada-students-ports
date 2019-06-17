import React, { Component } from 'react';

import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addStudentCallback({
      fullName: this.state.fullName,
      email: this.state.email,
    });
    this.setState({
      fullName: '',
      email: '',
    });

  }

  render() {
    const emailValid = /@/.test(this.state.email);
    console.log(emailValid);
    return (
      <form className="new-student-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            name="fullName"
            onChange={this.onChangeHandler}
            value={this.state.fullName}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={emailValid ? 'valid' : 'invalid'}
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
        </div>
        <input
          type="submit"
          value="Add Student"
        />
      </form>
    );
  }
}

export default NewStudentForm;