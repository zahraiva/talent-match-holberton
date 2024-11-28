import React, { useState } from 'react';
import './TalentMatch.css';

const students = [
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Dave', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Bob', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Charlie', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },

];

function TalentMatch() {
  const [input, setInput] = useState('');
  const [matchedStudents, setMatchedStudents] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredSkills = input.split(',').map((skill) => skill.trim().toLowerCase());

    const matched = students.filter((student) =>
      requiredSkills.every((skill) =>
        student.skills.map((s) => s.toLowerCase()).includes(skill)
      )
    );

    setMatchedStudents(matched);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className={`card ${submitted ? 'move-up' : ''}`}>
        <h2 className={`title ${submitted ? 'animated' : ''}`}>AI-based Talent Match</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>Enter your need (comma-separated skills):</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., React, Node.js"
            className="input"
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>

      <div className="results">
        {matchedStudents.length > 0 ? (
          matchedStudents.map((student, index) => (
            <div key={index} className="studentCard">
              <img src={student.photo} alt={student.name} className="studentPhoto" />
              <h3>{student.name}</h3>
              <p>{student.skills.join(', ')}</p>
            </div>
          ))
        ) : (
          <p className="noResults">No students match your requirements</p>
        )}
      </div>
    </div>
  );
}

export default TalentMatch;
