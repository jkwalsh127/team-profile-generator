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


 function generateManagerCard(manager){
     console.log(manager);
    return `<section id='card'><div id='card-head'><h2 id='employee-name'>${manager.name}</h2><h3 id='job-title'>Manager</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${manager.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'>${manager.email}</p></div><div class='content'><h4 class='label'>Office Number: </h4><p class='label'>${manager.officeNumber}</p></div></div></section>`;
};

//  function generateEngineerCards(data){
//     return `<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${data.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${data.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${data.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${data.email}</p></div><div id='content'><h4 id='label-3'>GitHub: </h4><p id='content-3'>${data.github}</p></div></div></section></div>`;

//  function generateInternCards(data){
//     return `<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${data.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${data.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${data.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${data.email}</p></div><div id='content'><h4 id='label-3'>School: </h4><p id='content-3'>${data.school}</p></div></div></section></div>`};

 function generateCardsEngineer(engineers){
    ret = "";
    engineers.forEach(engineer => {
        ret = `${ret}<section id='card'><div id='card-head'><h2 id='employee-name'>${engineer.name}</h2><h3 id='job-title'>Engineer</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${engineer.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'>${engineer.email}</p></div><div class='content'><h4 class='label'>GitHub: </h4><p class='label'>${engineer.github}</p></div></div></section>\n`;
    });
    return ret;
}

 function generateCardsIntern(interns){
    ret = "";
    interns.forEach(intern => {
        ret = `${ret}<section id='card'><div id='card-head'><h2 id='employee-name'>${intern.name}</h2><h3 id='job-title'>Intern</h3></div><div id='card-content'><div class='content'><h4 class='label'>ID: </h4><p class='label'>${intern.id}</p></div><div class='content'><h4 class='label'>Email: </h4><p class='label'>${intern.email}</p></div><div class='content'><h4 class='label'>School: </h4><p class='label'>${intern.school}</p></div></div></section>\n`;
    });
    return ret;
}

module.exports = generateHTML;