import React from 'react';
import Student from './Student';
import NewStudentForm from './NewStudentForm';
import studentsList from '../students.json';
class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      students: studentsList.students,
    };
  }

  showMessages = (messages) => {
    this.setState({
      messages,
    });
  }

  addStudent = (student) => {
    const students = this.state.students;
    students.push(student);
    this.setState({
      students,
      messages: [`${student.fullName} is added`],
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
            markPresentCallback={this.markPresent}
          />
        </li>
      );
    });

    const messages = this.state.messages.map((message) => {
      return <p key={message}>{message}</p>;
    });

    return (
      <section>
        {messages}

        <NewStudentForm
          addStudentCallback={this.addStudent}
          messageCallback={this.showMessages}
        />

        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }

}

export default StudentCollection;