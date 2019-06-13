import React from 'react';
import Student from './Student';

class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          fullName: "Ada Lovelace",
          isPresent: false,
        },
        {
          fullName: "Katherine Johnson",
          email: "kat@nasa.gov",
          isPresent: false,
        },
        {
          fullName: "Betty White",
          isPresent: false,
        },
        {
          fullName: "Dee",
          isPresent: false,
        },
        {
          fullName: "Chris",
          isPresent: false,
        }
      ]
    };
  }

  markPresent = (studentIndex) => {
    let updatedStudents = this.state.students;
    updatedStudents[studentIndex].isPresent = true;

    this.setState({
      students: updatedStudents,
    });
  }

  render() {
    const studentComponents = this.state.students.map((student, i) => {
      return (
        <li key={i}>
          <Student
            index={i}
            fullName={student.fullName}
            email={student.email}
            isPresent={student.isPresent}
            markPresentCallback={this.markPresent} />
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