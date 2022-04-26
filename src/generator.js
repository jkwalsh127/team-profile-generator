/**
 * returns the coplete string of html to be generated, through the use of child functions to generate cards for each employee in 'employees' array
 * @param {array} employees the array of class passed by writeToFile
 * @returns {string} complete generated html content
 */
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

  /**
   * iterates through the 'employees' array and passes each employee object into generateCard, returning a string of html with each employee card to be inserted into the final returned html string
   * @param {array} employees receives employees array from parent function
   * @returns {string} html represnting the card portion of each employee to be passed into main html content
   */
  function passCards(employees) {
    console.log("here is your team!");
    console.log(employees);
    card = ``;
    employees.forEach(employee => {
      card += generateCard(employee);
      console.log(typeof employee);
      return card;
    })
    return card;
  };

  /**
   * generates the card for each employee
   * @param {object} employee each employee passed from the employees array by passCards
   * @returns {string} html card content
   */
  function generateCard(employee) {
    let unique;
    let name = employee.getName();
    let id = employee.getId();
    let email = employee.getEmail();
    let role = employee.getRole();
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
          <h2 class='employee-name'>${name}</h2>
          <h3 class='job-title'>${role}</h3>
        </div>
        <div class='card-content'>
          <div class='content'>
            <h4 class='label'>ID: </h4>
            <p class='label'>${id}</p>
          </div>
          <div class='content'>
            <h4 class='label'>Email: </h4>
            <p class='label'>
              <a href='mailto:${email}' target='_blank'>${email}</a>
            </p>
          </div>
          ${unique}
        </div>
      </section>`
    }
};

module.exports = generateHTML;