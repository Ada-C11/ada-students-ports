import React from 'react';
import Student from './Student';

class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          fullName: "Ada Lovelace",
        },
        {
          fullName: "Katherine Johnson",
          email: "kat@nasa.gov",
        },
      ]
    };
  }

  render() {
    const studentComponents = this.state.students.map((student, i) => {
      return (
        <li key={i}>
          <Student
            fullName={student.fullName}
            email={student.email} />
        </li>
      );
    });

    return (
      <section>
        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }

}

export default StudentCollection;