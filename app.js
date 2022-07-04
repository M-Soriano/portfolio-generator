const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name,github] = profileDataArgs;
//const generatePage = () => 'Name: Jane, Github: janehub';
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
const generatePage = (userName, githubName) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>

  `;
};
//console.log(generatePage());
//console.log(generatePage('Jane', 'janehub'));
/*console.log(name, github);
console.log(generatePage(name, github));
*/
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


  /*
const printProfileData = profileDataArr => {
    // This...
    //for (let i = 0; i < profileDataArr.length; i += 1) {
      //console.log(profileDataArr[i]);
    //}

    //console.log('===========');

    profileDataArr.forEach(profileItem => console.log(profileItem));
  };
  

  
  printProfileData(profileDataArgs);git */