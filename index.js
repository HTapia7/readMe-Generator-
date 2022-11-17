// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

 // TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
const readMeSkeleton = (resp) => 
`# ${resp.title}

## Description

* ${resp.description}

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
            choices: ['option1' , 'option2' , 'option3' , 'option4'  ]
         },
        {
            name: 'credit',
            type: 'input',
            message: 'How you can contribute to this application?'
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

// Function call to initialize app
init();