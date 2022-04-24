function generateHTML(data) {
    const managerCard = generateManagerCard(data.managers);    
    const engineerCards = generateCardsEngineer(data.engineers);    
    const internCards = generateCardsIntern(data.interns);    


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
        ${managerCard}
        ${engineerCards}
        ${internCards}
      </section>
    </body>
    </html>
    `;
}


 function generateManagerCard(managers){
    ret = "";
    managers.forEach(manager => {
        ret = `<section id='card'><div id='card-head'><h2 id='employee-name'>${manager.name}</h2><h3 id='job-title'>Manager</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${manager.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'><a href='mailto:${manager.email}' target='_blank'>${manager.email}</a></p></div><div class='content'><h4 class='label'>Office Number: </h4><p class='label'>${manager.officeNumber}</p></div></div></section>`;
    });
    return ret;
};

 function generateCardsEngineer(engineers){
    ret = "";
    engineers.forEach(engineer => {
        ret = `${ret}<section id='card'><div id='card-head'><h2 id='employee-name'>${engineer.name}</h2><h3 id='job-title'>Engineer</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${engineer.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'><a href='mailto:${engineer.email}' target='_blank'>${engineer.email}</a></p></div><div class='content'><h4 class='label'>GitHub: </h4><p class='label'>${engineer.github}</p></div></div></section>\n`;
    });
    return ret;
};

 function generateCardsIntern(interns){
    ret = "";
    interns.forEach(intern => {
        ret = `${ret}<section id='card'><div id='card-head'><h2 id='employee-name'>${intern.name}</h2><h3 id='job-title'>Intern</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${intern.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'><a href='mailto:${intern.email}' target='_blank'>${intern.email}</a></p></div><div class='content'><h4 class='label'>School: </h4><p class='label'>${intern.school}</p></div></div></section>\n`;
    });
    return ret;
};

module.exports = generateHTML;