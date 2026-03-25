// config.js
const CONFIG = {
    development: {
        API_URL: 'http://localhost:3000',
        ENV: 'development'
    },
    production: {
        API_URL: 'https://ellora-1.onrender.com', // Your Render URL
        ENV: 'production'
    }
};

const ENV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'development' 
    : 'production';

window.APP_CONFIG = CONFIG[ENV];
console.log('🌐 Running in:', ENV, 'mode');
console.log('🔗 API URL:', window.APP_CONFIG.API_URL);