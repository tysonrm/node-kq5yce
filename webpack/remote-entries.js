//const githubEntries = require("./remote-entries-github");
// const githubEntries = require("./remote-entries-github-customer");
const githubEntries = require("./remote-entries-github-order");
const cacheEntries = require("./remote-entries-cache");
//const cacheEntries = [];

module.exports = githubEntries.concat(cacheEntries);
