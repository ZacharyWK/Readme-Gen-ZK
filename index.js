//worked with cassandra, paola, matthew and joe on 6-18-2021

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
let generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


const onGo = () => { 
return inquirer.prompt([
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
      type: 'input',
      name: 'design',
      message: 'Explain design Choices',
      default: 'The UI is...'
    },
    {
      type: 'list',
      name: 'file',
      message: 'Select Filetype of first Image',
      choices: ['jpg','gif','png','webp',],
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
      default:'Start by...',
    },
    {
      type: 'input',
      name: 'guideLines',
      message: 'Enter Contribution Guidelines.',
      default:'Dont let your dreams be dreams...',

    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter Testing Instructions.',
      default:'Do it...',

    },
    {
      type: 'edit',
      name: 'givenCriteria',
      message: 'List any Given Criteria.',
      default: 'Do the thing...'
    },
    {
      type: 'list',
      name: 'license',
      message: 'License Selection',
      choices: ['GNU', 'MIT', 'Apache', 'CC0','WTFPL','Unlicense',],
    },
])
};


go = () => {
  onGo()
  .then((data) => writeFileAsync('DEMO-README.md', generateMarkdown(data)))
  .then(() => console.log('Much Success!!!'))
  .catch((err) => console.error(err));
};

go();