import React from 'react';
import Student from './Student';

const StudentCollection = () => {

  // One day, this will not be assigned to an array literal... it will be assigned to JSON coming from an API ;)
  const students = [
    {
      fullName: "Ada Lovelace",
      email: "ada@lovelace.uk",
    },
    {
      fullName: "Katherine Johnson",
      email: "kat@nasa.gov",
    },
  ];

  const studentComponents = students.map( (student, i) => {
    return (
      <li key={i}>
        <Student
          fullName={ student.fullName }
          email={ student.email } />
      </li>
    );
  });

  return (
    <section>
      <ul>
        { studentComponents }
      </ul>
    </section>
  );
};

export default StudentCollection;