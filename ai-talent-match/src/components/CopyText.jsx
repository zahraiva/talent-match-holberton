
import React from "react";

function CopyTextButton() {
  const textToCopy = [
    "A mobile app for reporting infrastructure issues",
    "A scholarship management and application portal",
    "AI-powered analysis of deforestation patterns",
    "AI-powered audit tool to identify irregularities in spending",
    "AI-powered tool for personalized learning recommendations",
    "Automated tax calculation and filing platform",
    "Automating appointment scheduling for public services",
    "Automating payroll and benefits calculations",
    "Budget allocation and tracking system",
    "Creating an AI-based chatbot for frequently asked questions",
    "Developing a system for real-time employee performance tracking",
    "Digitizing and managing document archives",
    "E-learning platform for government schools",
    "Flood prediction and early warning system",
    "IoT sensors for real-time managing office",
    "Mentor for staff for tech-related topics. To give them insight to tech world",
    "Predictive analytics for drop-out rate reduction",
    "Predictive analytics for revenue generation strategies",
    "Quality monitoring system with live dashboards",
    "Smart attendance tracking for students and teachers",
    "Waste management optimization using route planning algorithms",
  ];

  const handleCopy = () => {
    const text = textToCopy.join("\n"); // Tüm metinleri birleştir (her biri yeni satıra)
    navigator.clipboard.writeText(text).then(
      () => {
       
      },
      (err) => {
        console.error("Kopyalama başarısız:", err);
        
      }
    );
  };

  return (
    <div>
      <button onClick={handleCopy} className="copy-button">
       copy
      </button>
    </div>
  );
}

export default CopyTextButton;
