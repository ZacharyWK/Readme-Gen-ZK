function generateMarkdown(data) {
return`# ${data.year}${data.month}${data.day} - ${data.title} 

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

 ## Table of Contents.
 * [Overview](#overview)
 * [Design](#overview)
 * [Installation](#overview)
 * [Usage](#overview)
 * [GuideLines](#contribution-guideLines)
 * [Criteria](#given-criteria)
 * [Questions](#have-questions)
 * [Links](#links)
 ---


## Overview 
    ${data.description}

## Design
![image](./img/image1.${data.file})

    ${data.design}

## Installation Instructions
    ${data.installation}

## Usage Instructions
    ${data.usage}

## Contribution Guidelines
    ${data.guideLines}


---
## Given Criteria
${data.givenCriteria} 


---
## Have Questions
### You can contact me at:

    GITHUB: <https://github.com/${data.userName}>

    EMAIL: <${data.email}>


---
## Links
[REPOSITORY](https://github.com/${data.userName}/${data.title})
\`\`\`
https://github.com/${data.userName}/${data.title}
\`\`\`

`
};

module.exports = generateMarkdown;