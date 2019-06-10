import React from 'react';

const Student = (props) => {
  return (
    <section>
      <h3>
        { props.fullName } >:)
      </h3>
      <p>
        Email address: { props.email }
      </p>
    </section>
  );
};

export default Student;