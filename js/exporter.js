/* ==========================================================================
   EXPORTER UTILITIES (js/exporter.js)
   ========================================================================== */

const Exporter = {
  
  // Download Standalone HTML File
  async downloadHTML(data, mode, themeClass) {
    let renderedContent = '';
    let stylesheetLink = '';

    if (mode === 'portfolio') {
      renderedContent = TemplateGenerators.renderPortfolio(data, themeClass);
      stylesheetLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;600;800&family=Fira+Code:wght@400;700&display=swap">`;
    } else {
      renderedContent = TemplateGenerators.renderCV(data, themeClass);
      stylesheetLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;600;800&display=swap">`;
    }

    // Fetch active CSS content to bundle inline
    const appCss = await fetch('css/app.css').then(r => r.text()).catch(() => '');
    const pfCss = await fetch('css/portfolio-templates.css').then(r => r.text()).catch(() => '');
    const cvCss = await fetch('css/cv-templates.css').then(r => r.text()).catch(() => '');

    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal?.fullName || 'Portfolio'} - ${mode.toUpperCase()}</title>
  ${stylesheetLink}
  <style>
    ${pfCss}
    ${cvCss}
    body {
      margin: 0;
      padding: 0;
      background: #0b0f19;
    }
  </style>
</head>
<body>
  ${renderedContent}
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(data.personal?.fullName || 'My_Profile').replace(/\s+/g, '_')}_${mode}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Trigger Print to PDF
  printPDF() {
    window.print();
  },

  // Export profile state to JSON
  exportJSON(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(data.personal?.fullName || 'profile').replace(/\s+/g, '_')}_data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import profile from JSON file
  importJSON(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        callback(parsed);
      } catch (err) {
        alert('Invalid JSON profile file.');
      }
    };
    reader.readAsText(file);
  }
};
