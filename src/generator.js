
function generateHTML(employees) {

  return `<!DOCTYPE html>
  <html lang='en-US'>
  <head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='./style.css'>
    <title>Team Portfolios</title>
  </head>
  <body>
    <header id='header'>
      <h1 id='team-head'>My Team</h1>
    </header>
    <section id='content-container'> 
      ${passCards(employees)}
    </section>
    </body>
    </html>
    `;

  function passCards(employees) {
    console.log("here is your team!");
    console.log(employees);
    card = ``;
    employees.forEach(employee => {
      card += generateCard(employee);
      console.log(card);
      return card
    })
    return card;
  };

  function generateCard(employee) {
    let unique;
    let role = employee.getRole();
    console.log(role);
    if (role === 'Manager') {
      let officenumber = employee.getOfficeNumber();
      unique = `<div class='content'><h4 class='label'>Office Number: </h4><p class='label'>${officenumber}</p></div>\n`;
    } else if (role === 'Engineer') {
      let github = employee.getGitHub();
      unique = `<div class='content'><h4 class='label'>GitHub: </h4><p class='label'><a href='https://github.com/${github}' target='_blank'>${github}</a></p></div>\n`;
    } else if (role === `Intern`) {
      let school = employee.getSchool();
      unique = `<div class='content'><h4 class='label'>School: </h4><p class='label'>${school}</p></div>\n`;
    }
    return `<section class='card'>
        <div class='card-head'>
          <h2 class='employee-name'>${employee.name}</h2>
          <h3 class='job-title'>${role}</h3>
        </div>
        <div class='card-content'>
          <div class='content'>
            <h4 class='label'>ID: </h4>
            <p class='label'>${employee.id}</p>
          </div>
          <div class='content'>
            <h4 class='label'>Email: </h4>
            <p class='label'>
              <a href='mailto:${employee.email}' target='_blank'>${employee.email}</a>
            </p>
          </div>
          ${unique}
        </div>
      </section>`
    }
};


//  function generateManagerCard(managers){
//     ret = "";
//     managers.forEach(manager => {
//         ret = ``;
//     });
//     return ret;
// };

//  function generateCardsEngineer(engineers){
//     ret = "";
//     engineers.forEach(engineer => {
//         ret = `${ret}<section class='card'><div class='card-head'><h2 class='employee-name'>${engineer.name}</h2><h3 class='job-title'>Engineer</h3></div><div class='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${engineer.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'><a href='mailto:${engineer.email}' target='_blank'>${engineer.email}</a></p></div>
        
//         </div></section>\n`;
//     });
//     return ret;
// };

//  function generateCardsIntern(interns){
//     ret = "";
//     interns.forEach(intern => {
//         ret = `${ret}<section class='card'><div class='card-head'><h2 class='employee-name'>${intern.name}</h2><h3 class='job-title'>Intern</h3></div><div class='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${intern.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'><a href='mailto:${intern.email}' target='_blank'>${intern.email}</a></p></div>
        
//         </div></section>\n`;
//     });
//     return ret;
// };

module.exports = generateHTML;