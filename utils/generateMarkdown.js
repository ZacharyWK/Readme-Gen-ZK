const APACHE = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
const GNU = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
const MIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) `;
const CC0 = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)` ;
const WTFPL = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
const Unlicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

let bdg = '';
let deployedTo = ``;


function licenseCheck (data) {
  if (data.license == 'APACHE') {return bdg = APACHE}
  else if (data.license == 'CC0') {return bdg = CC0}
  else if (data.license == 'GNU') {return bdg = GNU}
  else if (data.license == 'MIT') {return bdg = MIT}
  else if (data.license == 'WTFPL') {return bdg = WTFPL}
  else {return bdg = Unlicense};
  
};

// function deployCheck(data) {
//   let depoName = data.userName.toLowerCase();
//   console.log("USERNAME", );
// data.deployed ? deployedTo =
// `[DEPLOYED](https://${depoName}.github.io/${data.title}/)
// \`\`\`
// https://${depoName}.github.io/${data.title}/
// \`\`\`` :
// '';
// };


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return`# ${data.year}${data.month}${data.day} - ${data.title} 
 
 ## Table of Contents.
 * [Overview](#Overview)
 * [Design](#Design)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [GuideLines](#GuideLines)
 * [Criteria](#Criteria)
 * 

## Overview 
###${data.description}
---
## Design
###${data.design}
---
## Installation Instructions
###${data.installation}
---
## Usage Instructions
###${data.usage}
---



## Given Criteria
${data.givenCriteria} 


## Design
![image](.location/)


## About
GITHUB: <https://github.com/${data.userName}>

EMAIL: <${data.email}>

## Links
[REPOSITORY](https://github.com/${data.userName}/${data.title})
\`\`\`
https://github.com/${data.userName}/${data.title}
\`\`\`

`;
};
// module.exports = licenseCheck()
// console.log("LC: ",data);
// module.exports = deployCheck();
// console.log("DC: ",data);
module.exports = {
  licenseCheck:licenseCheck,
  // deployCheck:deployCheck,
  generateMarkdown:generateMarkdown,

};