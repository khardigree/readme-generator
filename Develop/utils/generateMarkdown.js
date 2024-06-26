// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
//function to render the badges for licenses
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// Function to render the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// Function to render the license section of the README
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT license.';
  } else if (license === 'Apache 2.0') {
    return 'This project is licensed under the Apache 2.0 license.';
  } else if (license === 'GPL 3.0') {
    return 'This project is licensed under the GPL 3.0 license.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// Export the generateMarkdown function and the render functions
module.exports = generateMarkdown;
module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection};