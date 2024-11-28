import React, { useState, useEffect } from "react";
import "./TalentMatch.css";

const students = [
  {
    name: "Aziz",
    skills: ["JavaScript", "HTML","JavaScript", "HTML","JavaScript", "HTML"],
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Kamran",
    skills: ["JavaScript", "React","JavaScript", "React","JavaScript", "React","JavaScript", "React"],
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Samir",
    skills: ["React", "Node.js", "CSS"],
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Tahir",
    skills: ["JavaScript", "React", "Node.js"],
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Rufat",
    skills: ["JavaScript", "HTML"],
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   name: "Dave",
  //   skills: ["JavaScript", "React", "Node.js"],
  //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Alice",
  //   skills: ["JavaScript", "HTML"],
  //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
  // },
  // {
  //   name: "Bob",
  //   skills: ["JavaScript", "React"],
  //   photo: "https://randomuser.me/api/portraits/men/8.jpg",
  // },
  // {
  //   name: "Charlie",
  //   skills: ["React", "Node.js", "CSS"],
  //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
];

function TalentMatch() {
  const [input, setInput] = useState("");
  const [matchedStudents, setMatchedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Add an effect to trigger animations on page load
  useEffect(() => {
    const titleElement = document.querySelector(".title");
    if (titleElement) {
      titleElement.classList.add("animated"); // Add animation class to title
    }
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (input.trim()) {
        setLoading(true); // Start loading 2 seconds after input stops
        setSubmitted(false);

        const requiredSkills = input
          .split(",")
          .map((skill) => skill.trim().toLowerCase());

        setTimeout(() => {
          // Simulate data fetch
          const matched = students.filter((student) =>
            requiredSkills.every((skill) =>
              student.skills.map((s) => s.toLowerCase()).includes(skill)
            )
          );

          setMatchedStudents(matched);
          setLoading(false); // Stop loading
          setSubmitted(true); // Show results
        }, 500); // Simulated fetch time
      }
    }, 2000); // Wait 2 seconds after user stops typing

    return () => clearTimeout(debounceTimer); // Cleanup timer on input change
  }, [input]);

  return (
    <div className={`container ${loading ? "blurred" : ""}`}>
      {loading && <div className="loading">Loading...</div>}
      <div className="logo-image">
        <img src="/holbie.png" alt="image" />
      </div>

      <div className="holbie-svg">
        <img src="/holbie.svg" alt="holbie-svg" />
      </div>

      <h2 className="title">Holberton AI-based Talent Match</h2>
      {!submitted && !loading && (
        <div className="card">
          <div className="card-overlay">
            <form className="form">
              <label>Enter your need:</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., React, Node.js"
                className="input"
              />
            </form>
          </div>
        </div>
      )}

      {submitted && (
        <div className="results">
          {submitted && matchedStudents.length > 0
            ? matchedStudents.map((student, index) => (
                <div key={index} className="studentCard">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="studentPhoto"
                  />
                  <h3>{student.name}</h3>
                  <p>{student.skills.join(", ")}</p>
                </div>
              ))
            : submitted &&
              matchedStudents.length === 0 && (
                <p className="noResults">No students match your requirements</p>
              )}
        </div>
      )}
    </div>
  );
}

export default TalentMatch;
