import React from "react";
import { jsPDF } from "jspdf";

function ContactPage() {
  // ✅ Function to generate and download a vCard (.vcf)
  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Sewe Susan
EMAIL:sewesusan9@gmail.com
EMAIL:sewe@susan.com
TEL:+254732740873
URL:https://sewesusan.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "Sewe_Contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // ✅ Function to generate and download a PDF (.pdf)
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Contact Information", 20, 20);

    // Add Contact Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("Name: Sewe Susan", 20, 40);
    doc.text("Email: sewesusan9@gmail.com", 20, 50);
    doc.text("Email: sewe@susan.com", 20, 60);
    doc.text("Phone: +254732740873", 20, 70);
    doc.text("Website: https://sewesusan.com", 20, 80);

    // Save the PDF
    doc.save("Sewe_Contact.pdf");
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p><strong>Email:</strong> sewesusan9@gmail.com</p>
      <p><strong>Email:</strong> sewe@susan.com</p>
      <p><strong>Phone:</strong> +254732740873</p>
      <p><strong>Website:</strong> <a href="https://sewesusan.com" target="_blank" rel="noopener noreferrer">sewesusan.com</a></p>

      {/* ✅ Button to Download vCard */}
      <button onClick={generateVCard}>Download vCard</button>

      {/* ✅ Button to Generate & Download PDF */}
      <button onClick={generatePDF}>Download Contact PDF</button>
    </div>
  );
}

export default ContactPage;


