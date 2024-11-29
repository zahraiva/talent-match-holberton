import React, { useState } from "react";
import "./TalentMatch.css";
import CopyTextButton from "./CopyText";

function TalentMatch() {
  const projects = {
    "A mobile app for reporting infrastructure issues": [
      {
        talent_name: "Aysu Sadıxova",
        position: "Software Engineer with mobile app experience",
        techstack: "Python, Flask, Java",
        photo: "/assets/students/AysuSadikhova.jpeg",
      },
      {
        talent_name: "Novruz Shafiyev",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/NovruzShefiyev.jpeg",
      },
      {
        talent_name: "Muhammed Sultanov",
        position: "Backend developer",
        techstack: "Python, Flask",
        photo: "/assets/students/MuhammedSultanov.jpg",
      },
    ],
    "A scholarship management and application portal.": [
      {
        talent_name: "Nigar Abdullayeva",
        position: "Backend developer",
        techstack: "Python",
        photo: "/assets/students/NigarAbdullayeva.jpeg",
      },
      {
        talent_name: "Emin Amirov",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/Emin.jpeg",
      },
      {
        talent_name: "Narmin Mammadova",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/NarminMammadova.jpg",
      },
    ],
    "AI-powered analysis of deforestation patterns.": [
      {
        talent_name: "Samir Ibrahimov",
        position: "Backend developer with Data analytics experience",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/SamirIbrahimov.jpeg",
      },
      {
        talent_name: "Albina Ismayilova",
        position: "Backend developer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/AlbinaIsmayilova.jpeg",
      },
    ],
    "AI-powered audit tool to identify irregularities in spending.": [
      {
        talent_name: "Ravan Mustafazada",
        position: "Backend developer with AI experience",
        techstack: "Python, Flask",
        photo: "/assets/students/RevanMustafazada.jpeg",
      },
      {
        talent_name: "Shukufa Bayramzada",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/Shukufa.jpeg",
      },
    ],
    "AI-powered tool for personalized learning recommendations.": [
      {
        talent_name: "Samir Ibrahimov",
        position: "Backend developer with Data analytics experience",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/SamirIbrahimov.jpeg",
      },
      {
        talent_name: "Museyib Ali",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/Museyib.jpeg",
      },
    ],
    "Automated tax calculation and filing platform.": [
      {
        talent_name: "Heseneli Asadov",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/hasanalii.jpeg",
      },
      {
        talent_name: "Sayyara Yusupova",
        position: "Backend developer",
        techstack: "C, Python, C++",
        photo: "/assets/students/Sayyara.jpeg",
      },
      {
        talent_name: "Kamran Qureyshi",
        position: "Software engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/KamranQ.jpeg",
      },
      {
        talent_name: "Pakiza Mutallimova",
        position: "Frontend developer",
        techstack: "HTML, CSS, React",
        photo: "/assets/students/PakizaMutallimova.jpg",
      },
    ],
    "Automating appointment scheduling for public services.": [
      {
        talent_name: "Rufat Jabbarov",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/RufatJabbarov.jpeg",
      },
      {
        talent_name: "Gülanə Mehrəlizadə",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/gulane.jpeg",
      },
    ],
    "Automating payroll and benefits calculations.": [
      {
        talent_name: "Rafig Mammadov",
        position: "Backend developer",
        techstack: "Python, Flask",
        photo: "/assets/students/RafigMammadov.jpg",
      },
      {
        talent_name: "Simara Kerimli",
        position: "Backend developer",
        techstack: "Python",
        photo: "/assets/students/SimaraKarimli.jpeg",
      },
      {
        talent_name: "Tahir Alizade",
        position: "Backend developer",
        techstack: "Python, Flask",
        photo: "/assets/students/TahirAlizade.jpeg",
      },
    ],
    "Budget allocation and tracking system.": [
      {
        talent_name: "Nihad Amirov",
        position: "Backend developer",
        techstack: "C, Python, Java",
        photo: "/assets/students/NihadAmirov.jpg",
      },
      {
        talent_name: "Khayyam Huseynli",
        position: "Backend developer",
        techstack: "C, Python, Flask, RESTful API",
        photo: "/assets/students/KhayyamHuseynli.jpg",
      },
      {
        talent_name: "Aysu Mammadova",
        position: "Software engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/AysuMammadova.jpg",
      },
    ],
    "Creating an AI-based chatbot for frequently asked questions.": [
      {
        talent_name: "Ravan Mustafazada",
        position: "Backend developer with AI experience",
        techstack: "Python, Flask",
        photo: "/assets/students/RevanMustafazada.jpeg",
      },
      {
        talent_name: "Kamran Khalilov",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/KamranXelilov.jpeg",
      },
      {
        talent_name: "Farhad Asgarzada",
        position: "Frontend focused developer",
        techstack: "HTML, CSS, React",
        photo: "/assets/students/Ferhad.jpeg",
      },
    ],
    "Developing a system for real-time employee performance tracking": [
      {
        talent_name: "Hamida Allahverdiyeva",
        position: "Frontend developer; author of 13 platforms",
        techstack: "React, MERN, Python",
        photo: "/assets/students/Hamida.jpeg"
      },
      {
        talent_name: "Aziz Abbasov",
        position: "Software Engineer with UI/UX experience",
        techstack: "React, Python, Flask, HTML, CSS, Figma",
        photo: "/assets/students/AzizAbbasov.jpg"
      },
      {
        talent_name: "Muhammed Sultanov",
        position: "Backend developer",
        techstack: "Python, Flask",
        photo: "/assets/students/MuhammedSultanov.jpg"
      }
    ],
    "Digitizing and managing document archives": [
      {
        talent_name: "Hamida Allahverdiyeva",
        position: "Frontend developer; author of 13 platforms",
        techstack: "React, MERN, Python",
        photo: "/assets/students/Hamida.jpeg"
      },
      {
        talent_name: "Ruslan Hamidov",
        position: "Full Stack developer with mentoring experience",
        techstack: "Python, Ruby, NodeJS, React",
        photo: "/assets/students/RuslanHamidov.jpeg"
      },
      {
        talent_name: "Nahid Isayev",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/NahidIsayev.jpg"
      }
    ],
    "E-learning platform for government schools": [
      {
        talent_name: "Nihad Amirov",
        position: "Backend developer",
        techstack: "C, Python, Java",
        photo: "/assets/students/NihadAmirov.jpg"
      },
      {
        talent_name: "Asmar Jabbarova",
        position: "Frontend developer",
        techstack: "HTML, CSS",
        photo: "/assets/students/AsmarJabbarova.jpeg"
      }
    ],
    "Flood prediction and early warning system": [
      {
        talent_name: "Urfan Musayev",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/UrfanMusayev.jpg"
      },
      {
        talent_name: "Fehruz Panahaliyev",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/FehruzPanahaliyev.jpg"
      },
      {
        talent_name: "Revan Akhundov",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/RevanAxundov.jpeg"
      }
    ],
    "IoT sensors for real-time managing office": [
      {
        talent_name: "Kamran Mahmudov",
        position: "Backend developer with IoT experience",
        techstack: "Python, C, C++",
        photo: "/assets/students/KamranMahmudov.jpeg"
      },
      {
        talent_name: "Nihad Shirinli",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/Nihad Sirinli.png"
      },
      {
        talent_name: "Kamal Abdullayev",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/KamalAbdullayev.jpeg"
      }
    ],
    "Predictive analytics for drop-out rate reduction": [
      {
        talent_name: "Ilyas Hasanli",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/IlyasH.jpeg"
      },
      {
        talent_name: "Laman Nazirli",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/LamanNazirli.png"
      }
    ],
    "Predictive analytics for revenue generation strategies": [
      {
        talent_name: "Rauf Ahmadzada",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/RaufAhmadzada.jpeg"
      },
      {
        talent_name: "Fakhri Amanov",
        position: "Software engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/FakhriAmanov.jpg"
      },
      {
        talent_name: "Ogtay Muradov",
        position: "Backend developer with Cybersecurity experience",
        techstack: "C, Python, Flask",
        photo: "/assets/students/OgtayMuradov.jpeg"
      }
    ],
    "Quality monitoring system with live dashboards": [
      {
        talent_name: "Aytaj Allahverdiyeva",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/AytajAllahverdiyeva.jpg"
      },
      {
        "talent_name": "Simara Kerimli",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/SimaraKarimli.jpeg"
      },
      {
        talent_name: "Nihad Namatli",
        position: "Backend developer",
        techstack: "C, Python, RESTful API",
        photo: "/assets/students/NihadNamatli.jpg"
      }
    ],
    "Smart attendance tracking for students and teachers": [
      {
        talent_name: "Kamran Mahmudov",
        position: "Backend developer with IoT experience",
        techstack: "Python, C, C++",
        photo: "/assets/students/KamranMahmudov.jpeg"
      },
      {
        talent_name: "Ilqar Askerov",
        position: "Software Engineer",
        techstack: null,
        photo: "/assets/students/IlqarAskarov.jpg"
      },
      {
        talent_name: "Fidan Huseynova",
        position: "Software Engineer",
        techstack: "C, Python, Flask, HTML, CSS",
        photo: "/assets/students/FidanHuseynova.jpeg"
      }
    ],
    "Waste management optimization using route planning algorithms": [
      {
        talent_name: "Aziz Abbasov",
        position: "Software Engineer with UI/UX experience",
        techstack: "React, Python, Flask, HTML, CSS, Figma",
        photo: "/assets/students/AzizAbbasov.jpg"
      },
      {
        talent_name: "Amin Aghayev",
        position: "Full Stack developer",
        techstack: "Python, React, Javascript, NodeJS",
        photo: "/assets/students/AminAghayev.jpg"
      },
      {
        talent_name: "Farhad Asgarzada",
        position: "Frontend focused developer",
        techstack: "HTML, CSS, React",
        photo: "/assets/students/Ferhad.jpeg"
      }
    ],
    "Mentor for staff for tech-related topics": [
      {
        talent_name: "Ruslan Hamidov",
        position: "Full Stack developer with mentoring experience",
        techstack: "Python, Ruby, NodeJS, React",
        photo: "/assets/students/RuslanHamidov.jpeg"
      }
    ],
  };
  
  
  const [displayProjects, setDisplayProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setTimeout(() => {
      
      setDisplayProjects(true);
      setIsLoading(false); 
    }, 1000); 
  };

  const autoResize = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <div className="container">
      <div className="copy">

      <CopyTextButton/>
      </div>
      <div className="logo-image">
        <img src="/holbie.png" alt="image" />
        <h2 className="title">Holberton AI-based Talent Match</h2>
      </div>

      <div className="holbie-svg">
        <img src="/holbie.svg" alt="holbie-svg" />
      </div>

      <div className="card">
        <div className="card-overlay">
          <form className="form" onSubmit={handleSubmit}>
            <label>Enter your project:</label>
            <textarea
              type="text"
              placeholder="e.g., A mobile app for reporting infrastructure issues"
              className="input"
              onInput={autoResize}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {isLoading ? (
        <div className="loader"></div> // Loader gösteriliyor
      ) : (
        displayProjects && (
          <div className="results">
            {Object.entries(projects).map(([projectName, talents], projectIndex) => (
              <div key={projectIndex} className="project-section">
                <h3>Project: {projectName}</h3>
                <div className="students">
                  {talents.map((student, studentIndex) => (
                    <div key={studentIndex} className="studentCard">
                      <div className="img">
                        <img
                          src={student.photo}
                          alt={student.talent_name}
                          className="studentPhoto"
                        />
                      </div>
                      <div className="text">
                        <h3>{student.talent_name}</h3>
                        <p>{student.position}</p>
                        <p>Tech Stack: {student.techstack}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default TalentMatch;
