


function generateHTML(employees) {

  passEmployees(employees)

  function passEmployees(employees) {
    console.log("here is your team!");
    console.log(employees);
    employees.forEach(employee => generateCard(employee));
      // for (var i = 0; i < employees.length; i++) {
      //   generateCard(employees[i]);
      // }
  };

  function generateCard(employee) {
    console.log('Here is your next employee!');
    let role = employee.getRole();
    if (role === 'Manager') {
      role = `<div class='content'><h4 class='label'>Office Number: </h4><p class='label'>${manager.officeNumber}</p></div>`;
    } else if (role === 'Engineer') {
      role = `<div class='content'><h4 class='label'>GitHub: </h4><p class='label'><a href='https://github.com/${engineer.github}' target='_blank'>${engineer.github}</p></div>`;
    } else if (role === `Intern`) {
      role = `<div class='content'><h4 class='label'>School: </h4><p class='label'>${intern.school}</p></div>`
    } 

    return `
    <!DOCTYPE html>
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
        <section class='card'>
          <div class='card-head'>
            <h2 class='employee-name'>${employees.name}</h2>
            <h3 class='job-title'>Manager</h3>
          </div>
          <div class='card-content'>
            <div class='content'>
              <h4 class='label'>ID: </h4>
              <p class='label'>${employees.id}</p>
            </div>
            <div class='content'>
              <h4 class='label'>Email: </h4>
              <p class='label'>
                <a href='mailto:${employees.email}' target='_blank'>${employees.email}</a>
              </p>
            </div>
            ${role}
          </div>
        </section>
      </section>
    </body>
    </html>
    `;
  };  
};


 function generateManagerCard(managers){
    ret = "";
    managers.forEach(manager => {
        ret = ``;
    });
    return ret;
};

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