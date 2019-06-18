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

  validations = {
    fullName: /.+/,
    email: /.+@.+/,
  }

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let allFieldsValid = true;
    Object.keys(this.validations).forEach((fieldName) => {
      if (!this.fieldValid(fieldName)) {
        allFieldsValid = false;
      }
    })

    if (allFieldsValid) {
      this.props.addStudentCallback({
        fullName: this.state.fullName,
        email: this.state.email,
      });
      this.setState({
        fullName: '',
        email: '',
      });
    }
  }

  render() {
    return (
      <form className="new-student-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            name="fullName"
            onChange={this.onChangeHandler}
            value={this.state.fullName}
            className={this.fieldValid('fullName') ? 'valid' : 'invalid'}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={this.fieldValid('email') ? 'valid' : 'invalid'}
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