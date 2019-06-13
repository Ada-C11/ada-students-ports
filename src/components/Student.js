import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  onAttendanceButtonClick = () => {
    console.log('The button in Student Comopnent was clicked, and I\'m in the event handler in the Student Component');
    this.props.markPresentCallback(this.props.index);
  }

  render() {
    return (
      <section>
        <h3>
          {this.props.fullName} >:)
        </h3>
        <p>
          Email address: {this.props.email}
        </p>
        <p>
          { this.props.isPresent ? 'Present' : 'Absent' } today
          <button
            disabled={ this.props.isPresent }
            onClick={ this.onAttendanceButtonClick }
            >Mark Present</button>
        </p>
      </section>
    );
  }
}

Student.propTypes = {
  index: PropTypes.number.isRequired,
  // fullName must be a string and is required
  fullName: PropTypes.string.isRequired,
  // email is not required, but if it's there must be
  //   a string
  email: PropTypes.string,
  isPresent: PropTypes.bool,
  markPresentCallback: PropTypes.func,
};

Student.defaultProps = {
  email: 'Luddite, no email',
};

export default Student;