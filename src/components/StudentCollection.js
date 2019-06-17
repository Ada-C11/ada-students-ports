import React from 'react';
import Student from './Student';
import NewStudentForm from './NewStudentForm';
import studentsList from '../students.json';
class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      students: studentsList.students,
    };
  }

  addStudent = (student) => {
    const students = this.state.students;
    students.push(student);
    this.setState({
      students,
      message: `${student.fullName} is added`,
      // students: students,
    });
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
        <p>{this.state.message}</p>

        <NewStudentForm addStudentCallback={this.addStudent} />

        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }

}

export default StudentCollection;