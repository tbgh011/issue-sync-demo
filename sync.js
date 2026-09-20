// sync.js
const config = require('./config');

async function fetchIssues(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: { Authorization: `Bearer ${config.githubToken}` },
  });
  return res.json();
}

module.exports = { fetchIssues };
