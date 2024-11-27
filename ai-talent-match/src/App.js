import React, { useState } from "react";
import "./styles.css";

// Skills we are considering (represented by index positions)
const skillsList = ["JavaScript", "React", "Node.js", "HTML", "CSS"];

// Sample students with skills represented by binary strings
const students = [
  { name: "Alice", skills: "10010", photo: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Bob", skills: "11000", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Charlie", skills: "01101", photo: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Dave", skills: "11100", photo: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedStudents, setMatchedStudents] = useState([]);

  const handleSearch = () => {
    const searchBinary = skillsToBinary(searchTerm);
    const matched = students.filter(student =>
      student.skills.indexOf(searchBinary) !== -1
    );
    setMatchedStudents(matched);
  };

  // Converts search term to binary based on the skills
  const skillsToBinary = (search) => {
    const selectedSkills = search.split(",").map(skill => skill.trim());
    return selectedSkills.map(skill => skillsList.includes(skill) ? "1" : "0").join("");
  };

  return (
    <div className="app">
      <header>
        <img src="./holbie.svg" alt="Holberton Logo" className="holberton-logo" />
      </header>

      <div className="container">
        <div className="main-title">AI-based Talent Match</div>

        {/* Search bar */}
        <div className="search-container">
          <label className="search-label" htmlFor="search-bar">Enter your need (comma-separated skills):</label>
          <input
            id="search-bar"
            className="search-bar"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Submit</button>
        </div>
      </div>

      {/* Response panel with student results (outside the search bar container) */}
      <div className={`student-panel ${matchedStudents.length > 0 ? "show" : ""}`}>
        {matchedStudents.length > 0 && (
          <div className="student-list">
            {matchedStudents.map((student, index) => (
              <div key={index} className="student-card">
                <img src={student.photo} alt={student.name} />
                <h3>{student.name}</h3>
                <p>{skillsList.filter((_, i) => student.skills[i] === "1").join(", ")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
