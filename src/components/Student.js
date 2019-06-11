import React from 'react';
import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <section>
      <h3>
        {props.fullName} >:)
      </h3>
      <p>
        Email address: {props.email}
      </p>
    </section>
  );
};

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