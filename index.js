
const fs = require('fs');
let funcs = require('./utils/generateMarkdown.js') 
const inquirer = require('inquirer');
const util = require('util');


// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);
const start = () => { return inquirer.prompt([
    {
      type: 'input',
      name: 'email',
      message: 'Enter Email.',
      default: 'ZachKrause@live.com'
    },  
    {
      type: 'input',
      name: 'year',
      message: 'WHAT YEAR IS IT!',
      default: '20XX'
    },
    {
      type: 'list',
      name: 'month',
      message: 'Select Month',
      choices: ['01','02','03','04','05','06','07','08','09','10','11','12',]
    },
    {
      type: 'input',
      name: 'day',
      message: 'Todays Date',
      default: '##'
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter Project name.',
      default: 'PROJECT-ZK',
    },
    {
      type: 'input',
      name: 'userName',
      message: 'Enter GitHub Username.',
      default: 'ZacharyWK',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description.',
      default: 'This is a project was made to do...'
    },
    {
      type: 'confirm',
      name: 'design',
      message: 'Do you need a placeholders for Images?',
      choices: ['Yes','No']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter Installation Instructions.',
      default: 'Install node...'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter Usage Instructions.',
    },
    {
      type: 'input',
      name: 'guideLines',
      message: 'Enter Contribution Guidelines.',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter Testing Instructions.',
    },
    {
      type: 'edit',
      name: 'givenCriteria',
      message: 'List any Given Criteria.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License Selection',
      choices: ['GNU', 'MIT', 'APACHE', 'CC0','WTFPL','Unlicense',],
    },
    // {
    //   type: 'confirm',
    //   name: 'deployed',
    //   message: 'Will this Project be deployed on Github?',
    //   choices: ['Yes','No']
    // },
])
};


let go = () => {
  start()
  .then(funcs.licenseCheck)
  // .then(funcs.deployCheck)
  .then((data) => writeFileAsync('README.md', funcs.generateMarkdown(data)))
  .then(() => console.log('Much Success!!!'))
  .catch((err) => console.error(err));
};

go();