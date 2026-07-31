/* ==========================================================================
   HTML TEMPLATE GENERATORS FOR PORTFOLIO & CV (js/templates.js)
   ========================================================================== */

const TemplateGenerators = {
  
  /* ------------------------------------------------------------------------
     PORTFOLIO TEMPLATES RENDERING
     ------------------------------------------------------------------------ */
  renderPortfolio(data, themeClass) {
    const p = data.personal || {};
    const socials = data.socials || {};
    const projects = data.projects || [];
    const skills = data.skills || [];
    const exp = data.experience || [];
    const edu = data.education || [];

    const avatarHtml = p.avatarUrl ? `<img src="${p.avatarUrl}" alt="${p.fullName}" class="pf-avatar">` : '';

    // Projects Grid HTML
    const projectsHtml = projects.map(proj => {
      const tagsArray = proj.tags ? proj.tags.split(',').map(t => t.trim()) : [];
      const tagsMarkup = tagsArray.map(tag => `<span class="pf-tag">${tag}</span>`).join('');
      
      return `
        <div class="pf-project-card">
          <div class="pf-project-title">${proj.title || 'Untitled Project'}</div>
          <p class="pf-project-desc">${proj.description || ''}</p>
          <div class="pf-tags">${tagsMarkup}</div>
          <div class="pf-links">
            ${proj.demoLink ? `<a href="${proj.demoLink}" target="_blank" class="pf-link-btn">🔗 Live Demo</a>` : ''}
            ${proj.repoLink ? `<a href="${proj.repoLink}" target="_blank" class="pf-link-btn">💻 Repository</a>` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Skills HTML
    const skillsHtml = skills.map(s => `<span class="pf-skill-badge">${s.name} ${s.level ? `(${s.level})` : ''}</span>`).join('');

    // Terminal specific wrapper dots
    const terminalBarHtml = themeClass === 'pf-theme-terminal' ? `
      <div class="terminal-bar">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
    ` : '';

    return `
      <div class="${themeClass}">
        ${terminalBarHtml}
        <header class="pf-hero">
          ${avatarHtml}
          <div class="pf-hero-content">
            <h1>${p.fullName || 'Your Full Name'}</h1>
            <div class="pf-role">${p.jobTitle || 'Your Professional Role'}</div>
            <p class="pf-bio">${p.summary || 'Write a compelling intro about yourself and your passion...'}</p>
          </div>
        </header>

        ${projects.length > 0 ? `
          <section class="pf-section">
            <h2 class="pf-section-title">Featured Projects</h2>
            <div class="pf-projects-grid">
              ${projectsHtml}
            </div>
          </section>
        ` : ''}

        ${skills.length > 0 ? `
          <section class="pf-section">
            <h2 class="pf-section-title">Skills & Technologies</h2>
            <div class="pf-skills-wrap">
              ${skillsHtml}
            </div>
          </section>
        ` : ''}

        ${exp.length > 0 ? `
          <section class="pf-section">
            <h2 class="pf-section-title">Work Experience</h2>
            <div class="pf-projects-grid">
              ${exp.map(item => `
                <div class="pf-project-card">
                  <div class="pf-project-title">${item.position || 'Role'}</div>
                  <div class="pf-role">${item.company || 'Company'} | ${item.startDate || ''} - ${item.endDate || ''}</div>
                  <p class="pf-project-desc">${item.description || ''}</p>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <footer style="margin-top: 3rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; opacity: 0.8; font-size: 0.85rem;">
          <p>Contact: ${p.email || ''} ${p.location ? `• ${p.location}` : ''}</p>
        </footer>
      </div>
    `;
  },

  /* ------------------------------------------------------------------------
     CV / RESUME TEMPLATES RENDERING
     ------------------------------------------------------------------------ */
  renderCV(data, themeClass) {
    const p = data.personal || {};
    const exp = data.experience || [];
    const edu = data.education || [];
    const skills = data.skills || [];
    const projects = data.projects || [];

    if (themeClass === 'cv-theme-sidebar') {
      return `
        <div class="cv-theme-sidebar">
          <aside class="cv-sidebar">
            ${p.avatarUrl ? `<img src="${p.avatarUrl}" class="cv-avatar-sidebar" alt="${p.fullName}">` : ''}
            
            <div class="sidebar-group">
              <div class="sidebar-title">Contact Info</div>
              <div>📧 ${p.email || ''}</div>
              <div>📞 ${p.phone || ''}</div>
              <div>📍 ${p.location || ''}</div>
              ${p.website ? `<div>🌐 ${p.website}</div>` : ''}
            </div>

            ${skills.length > 0 ? `
              <div class="sidebar-group">
                <div class="sidebar-title">Key Skills</div>
                ${skills.map(s => `<div style="margin-bottom:4px;">• ${s.name}</div>`).join('')}
              </div>
            ` : ''}

            ${edu.length > 0 ? `
              <div class="sidebar-group">
                <div class="sidebar-title">Education</div>
                ${edu.map(e => `
                  <div style="margin-bottom:8px;">
                    <strong>${e.degree || ''}</strong><br>
                    ${e.institution || ''} (${e.year || ''})
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </aside>

          <main class="cv-main">
            <h1 class="cv-name">${p.fullName || 'Your Name'}</h1>
            <div class="cv-title">${p.jobTitle || 'Your Role'}</div>

            ${p.summary ? `
              <section class="cv-section">
                <div class="cv-summary-text">${p.summary}</div>
              </section>
            ` : ''}

            ${exp.length > 0 ? `
              <section class="cv-section">
                <h2 style="font-size:1.1rem; font-weight:800; border-bottom:2px solid #1e293b; padding-bottom:4px; margin-bottom:1rem;">Work Experience</h2>
                ${exp.map(item => `
                  <div class="cv-item">
                    <div style="display:flex; justify-between; align-items:center;">
                      <strong style="font-size:0.95rem;">${item.position || ''}</strong>
                      <span style="font-size:0.8rem; color:#64748b;">${item.startDate || ''} - ${item.endDate || ''}</span>
                    </div>
                    <div style="color:#6366f1; font-weight:600; font-size:0.88rem; margin-bottom:4px;">${item.company || ''}</div>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.5;">${item.description || ''}</p>
                  </div>
                `).join('')}
              </section>
            ` : ''}

            ${projects.length > 0 ? `
              <section class="cv-section">
                <h2 style="font-size:1.1rem; font-weight:800; border-bottom:2px solid #1e293b; padding-bottom:4px; margin-bottom:1rem;">Key Projects</h2>
                ${projects.map(proj => `
                  <div class="cv-item">
                    <strong>${proj.title || ''}</strong>
                    <p style="font-size:0.85rem; color:#475569; margin-top:2px;">${proj.description || ''}</p>
                  </div>
                `).join('')}
              </section>
            ` : ''}
          </main>
        </div>
      `;
    }

    // Default Executive & Modern templates
    return `
      <div class="${themeClass}">
        <header class="cv-header">
          <div>
            <h1 class="cv-name">${p.fullName || 'Your Name'}</h1>
            <div class="cv-title">${p.jobTitle || 'Your Title'}</div>
          </div>
          <div class="cv-contact-list">
            ${p.email ? `<div>${p.email}</div>` : ''}
            ${p.phone ? `<div>${p.phone}</div>` : ''}
            ${p.location ? `<div>${p.location}</div>` : ''}
            ${p.website ? `<div>${p.website}</div>` : ''}
          </div>
        </header>

        ${p.summary ? `
          <section class="cv-section">
            <h2 class="cv-section-title">Professional Summary</h2>
            <p class="cv-summary-text">${p.summary}</p>
          </section>
        ` : ''}

        ${exp.length > 0 ? `
          <section class="cv-section">
            <h2 class="cv-section-title">Work Experience</h2>
            ${exp.map(item => `
              <div class="cv-item">
                <div class="cv-item-header">
                  <span class="cv-item-title">${item.position || 'Position'}</span>
                  <span class="cv-item-date">${item.startDate || ''} - ${item.endDate || ''}</span>
                </div>
                <div class="cv-item-subtitle">${item.company || 'Company'}</div>
                <p class="cv-item-desc">${item.description || ''}</p>
              </div>
            `).join('')}
          </section>
        ` : ''}

        ${edu.length > 0 ? `
          <section class="cv-section">
            <h2 class="cv-section-title">Education</h2>
            ${edu.map(e => `
              <div class="cv-item">
                <div class="cv-item-header">
                  <span class="cv-item-title">${e.degree || 'Degree'}</span>
                  <span class="cv-item-date">${e.year || ''}</span>
                </div>
                <div class="cv-item-subtitle">${e.institution || 'Institution'} ${e.field ? `(${e.field})` : ''}</div>
              </div>
            `).join('')}
          </section>
        ` : ''}

        ${skills.length > 0 ? `
          <section class="cv-section">
            <h2 class="cv-section-title">Skills & Competencies</h2>
            <div class="cv-skills-grid">
              ${skills.map(s => `<span class="cv-skill-pill">${s.name}</span>`).join('')}
            </div>
          </section>
        ` : ''}
      </div>
    `;
  }
};
