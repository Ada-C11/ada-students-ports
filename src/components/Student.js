import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Student extends Component {
  constructor(props) {
    super(props);
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
      </section>
    );
  }
}

Student.propTypes = {
  // fullName must be a string and is required
  fullName: PropTypes.string.isRequired,
  // email is not required, but if it's there must be
  //   a string
  email: PropTypes.string,
};

Student.defaultProps = {
  email: 'Luddite, no email',
};

export default Student;