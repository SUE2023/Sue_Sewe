import React from "react";
import { Linkedin, Github, Twitter, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "20px", padding: "10px", background: "#f1f1f1" }}>
      <p>Connect with me:</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="https://www.linkedin.com/in/sewe-susan" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} color="#0077B5" />
        </a>
        <a href="https://github.com/SUE2023" target="_blank" rel="noopener noreferrer">
          <Github size={24} color="black" />
        </a>
        <a href="https://twitter.com/@sewe-susan" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} color="#1DA1F2" />
        </a>
        <a href="https://www.facebook.com/sewe.susan.9" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} color="#1877F2" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

