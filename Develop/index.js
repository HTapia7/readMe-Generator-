// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Readme generatoring information
const readMeSkeleton = (resp) => 
`# ${resp.title}
## Description
* ${resp.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Credits](#Credits)
5. [Test](#Test)
6. [Questions](#Questions)

## Installation 
* ${resp.installation}

## Usage
* ${resp.usage}

## License
* ${resp.license}

## Credits
* ${resp.credit}

## Test
* ${resp.test}

## Questions
* If you have questions you can check https://github.com/${resp.questions} or contact me at ${resp.email}
`

// TODO: Create a function to initialize app
function init() {
    // prompts for using input
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?'
        },
        {
            name: 'description',
            type: 'input',
            message: 'Provide a short description of your project?' 
        },
        {
            name: 'installation',
            type: 'input',
            message: 'What instruction does the user need to run your application?'  
        },{
            name: 'usage',
            type: 'input',
            message: 'How to use your application?' 
         },
         {
             name: 'license',
             type: 'list',
             message: 'License for this project?',
            choices: [
                        'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' ,

                        'Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' ,

                        'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' ,

                        'ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
            ]
         },
        {
            name: 'credit',
            type: 'input',
            message: 'Who can contribute to this application?'
        },
        {
            name: 'test',
            type: 'input',
            message: 'Provide examples about application?' 
        },
        {
            name: 'questions',
            type: 'input',
            message: 'What is your Github username?' 
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email address?' 
        }
    ]).then ((resp) => {
    fs.writeFile(`readme.md` ,readMeSkeleton(resp), () => (err) => {
        if(err){
            console.log(err)
        }
        return console.log('success')
        })
    })
}

// call function
init();