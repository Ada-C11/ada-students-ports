import React from 'react';
import Student from './Student';

const StudentCollection = () => {
  return (
    <section>
      <ul>
        <li>
          <Student fullName="Bort Sampson" email="justlikebart@bart.org" />
        </li>
      </ul>
    </section>
  );
};

export default StudentCollection;