import React from "react";

function Portfolio() {
  return (
    <div>
      <h2>Simple Projects</h2>
      <p>
        Simple projects are standalone pages that form part of cornerstone applications. 
        For example, the <strong>To-Do List</strong> is used as a task management page 
        in the Office application. At the office level, it has been enhanced to allow updates 
        from seniors and colleagues for better project management.
      </p>

      <h2>Intermediate Projects</h2>
      <p>
        Intermediate projects are **Minimum Viable Products (MVPs)** shared for trial and 
        real-world testing before full implementation.
      </p>

      <h2>Capstone Projects</h2>
      <p>
        Capstone projects are fully developed applications that are actively used, 
        serving and benefiting users in various business environments.
      </p>

      <h2>Simple Projects</h2>
      <ul>
        <li><strong>To-Do List</strong> – <a href="#">Link</a></li>
        <li><strong>Project P</strong> – <a href="#">Link</a></li>
        <li><strong>Project C</strong> – <a href="#">Link</a></li>
      </ul>

      <h2>Intermediate Projects</h2>
      <ul>
        <li><strong>Arsenic Website</strong> – <a href="#">Link</a></li>
        <li><strong>Personal Website</strong> – <a href="#">Link</a></li>
      </ul>

      <h2>Capstone Projects</h2>
      <ul>
        <li><strong>Library Management System</strong> – <a href="#">Link</a></li>
        <li><strong>Office Application</strong> – <a href="#">Link</a></li>
        <li><strong>Upcoming Project</strong> – <a href="#">Link</a></li>
      </ul>
    </div>
  );
}

export default Portfolio;

