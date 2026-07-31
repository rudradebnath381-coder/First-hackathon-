/* ==========================================================================
   UNIFIED STORAGE & STATE MANAGER (js/storage.js)
   ========================================================================== */

const AppStorage = {
  KEY_PROFILE: 'profile_craft_user_data',
  KEY_MODE: 'profile_craft_mode',
  KEY_TEMPLATE: 'profile_craft_template',

  // Save Profile Data
  saveProfile(profileData) {
    localStorage.setItem(this.KEY_PROFILE, JSON.stringify(profileData));
  },

  // Get Profile Data
  getProfile() {
    const raw = localStorage.getItem(this.KEY_PROFILE);
    if (!raw) return JSON.parse(JSON.stringify(SAMPLE_PROFILES.developer));
    try {
      return JSON.parse(raw);
    } catch (e) {
      return JSON.parse(JSON.stringify(SAMPLE_PROFILES.developer));
    }
  },

  // Save Mode ('portfolio' | 'cv')
  saveMode(mode) {
    localStorage.setItem(this.KEY_MODE, mode);
  },

  // Get Mode
  getMode() {
    return localStorage.getItem(this.KEY_MODE) || 'portfolio';
  },

  // Save Template ID
  saveTemplate(templateId) {
    localStorage.setItem(this.KEY_TEMPLATE, templateId);
  },

  // Get Template ID
  getTemplate() {
    const mode = this.getMode();
    const saved = localStorage.getItem(this.KEY_TEMPLATE);
    if (saved) return saved;
    return mode === 'portfolio' ? 'pf-theme-glass' : 'cv-theme-executive';
  }
};
