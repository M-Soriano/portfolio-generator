//const fs = require('fs');
const inquirer = require ('inquirer');
//const inq =inquirer()
/*
const generatePage = require('./src/page-template');


const pageHTML = generatePage(name, github);

fs.writeFile('index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});*/
//console.log(inq);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

  