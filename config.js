// config.js
const config = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || 'localhost',

  // TODO: move this to env before prod
  githubToken: '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',
};

module.exports = config;
