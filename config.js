// config.js - Create this in VS Code
const CONFIG = {
    development: {
        API_URL: 'http://localhost:3000',
        ENV: 'development'
    },
    production: {
        // IMPORTANT: Change this to your actual Netlify URL after uploading
        API_URL: 'https://ellora-1.onrender.com',
        ENV: 'production'
    }
};

// Auto-detect environment
const ENV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'development' 
    : 'production';

window.APP_CONFIG = CONFIG[ENV];
console.log('🌐 Running in:', ENV, 'mode');
console.log('🔗 API URL:', window.APP_CONFIG.API_URL);