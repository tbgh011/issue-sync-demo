// config.js
const config = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || 'localhost',

  // TODO: move this to env before prod
  githubToken: 'PASTE_YOUR_DEMO_PAT_HERE',
};

module.exports = config;
