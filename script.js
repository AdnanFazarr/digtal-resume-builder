document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const fieldOfStudy = document.getElementById('fieldOfStudy').value;
    const graduationDate = document.getElementById('graduationDate').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const jobStartDate = document.getElementById('jobStartDate').value;
    const jobEndDate = document.getElementById('jobEndDate').value;
    const jobDescription = document.getElementById('jobDescription').value;

    // Update preview
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = `
        <h3 style="color:rgb(60, 0, 255);">${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4 style="color:rgb(217, 0, 255);">Education</h4>
        <p>${degree} in ${fieldOfStudy}</p>
        <p>${school}, Graduated: ${graduationDate}</p>
        <h4 style="color:rgb(252, 6, 227);">Experience</h4>
        <p>${position} at ${company}</p>
        <p>${jobStartDate} to ${jobEndDate}</p>
        <p>${jobDescription}</p>
    `;

    // Show the download PDF button
    const downloadPdfButton = document.getElementById('downloadPdf');
    downloadPdfButton.style.display = 'block';
});

// Handle PDF download
document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const fieldOfStudy = document.getElementById('fieldOfStudy').value;
    const graduationDate = document.getElementById('graduationDate').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const jobStartDate = document.getElementById('jobStartDate').value;
    const jobEndDate = document.getElementById('jobEndDate').value;
    const jobDescription = document.getElementById('jobDescription').value;

    doc.setTextColor(0, 255, 255);
    doc.setFontSize(22);
    doc.text(`Resume - ${name}`, 10, 10);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.setTextColor(0, 255, 255);
    doc.text('Education', 10, 40);
    doc.setTextColor(0, 0, 0);
    doc.text(`${degree} in ${fieldOfStudy}`, 10, 50);
    doc.text(`${school}, Graduated: ${graduationDate}`, 10, 60);
    doc.setTextColor(0, 255, 255);
    doc.text('Experience', 10, 70);
    doc.setTextColor(0, 0, 0);
    doc.text(`${position} at ${company}`, 10, 80);
    doc.text(`${jobStartDate} to ${jobEndDate}`, 10, 90);
    doc.text(jobDescription, 10, 100);

    doc.save('resume.pdf');
});

// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('light-mode');
});
