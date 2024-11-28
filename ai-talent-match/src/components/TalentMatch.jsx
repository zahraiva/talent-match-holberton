import React, { useState, useEffect } from 'react';
import './TalentMatch.css';

const students = [
    { name: 'Aziz', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Kamran', skills: ['JavaScript', 'React'], photo: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: 'Samir', skills: ['React', 'Node.js', 'CSS'], photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Tahir', skills: ['JavaScript', 'React', 'Node.js'], photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Rufat', skills: ['JavaScript', 'HTML'], photo: "https://randomuser.me/api/portraits/women/1.jpg" },
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

  // Add an effect to trigger animations on page load
  useEffect(() => {
    const titleElement = document.querySelector('.title');
    if (titleElement) {
      titleElement.classList.add('animated'); // Add animation class to title
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredSkills = input.split(',').map((skill) => skill.trim().toLowerCase());

    // Filter students based on input skills
    const matched = students.filter((student) =>
      requiredSkills.every((skill) =>
        student.skills.map((s) => s.toLowerCase()).includes(skill)
      )
    );

    setMatchedStudents(matched);
    setSubmitted(true); // Mark as submitted so results can be shown
  };

  return (
    <div className="container">
      <div className={`card ${submitted ? 'move-up' : ''}`}>
        <h2 className="title">Holberton AI-based Talent Match</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>Enter your need:</label>
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
        {submitted && matchedStudents.length > 0 ? (
          // Display matched students if there are any
          matchedStudents.map((student, index) => (
            <div key={index} className="studentCard">
              <img src={student.photo} alt={student.name} className="studentPhoto" />
              <h3>{student.name}</h3>
              <p>{student.skills.join(', ')}</p>
            </div>
          ))
        ) : (
          // Show "No results" only if no students matched
          submitted && matchedStudents.length === 0 && <p className="noResults">No students match your requirements</p>
        )}
      </div>
    </div>
  );
}

export default TalentMatch;