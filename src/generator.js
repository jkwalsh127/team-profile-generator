function generateHTML(data) {
    const managerCard = generateManagerCard(data);
    const engineerCard = storeEngineer(data);
    const internCard = storeIntern(data);

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
        ${engineerCard}
        ${internCard}
      </section>
    </body>
    </html>
    `;
}
const engineers = [];
function storeEngineer(data) {
    engineers.push(data);
};

const interns = [];
function storeIntern(data) {
    interns.push(data);
};
/**
 * 
 * @param {repo[]} repos the array of relevant repo information
 */
 function generateManagerCard(data){
    return `<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${data.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${data.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${data.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${data.email}</p></div><div id='content'><h4 id='label-3'>Office Number: </h4><p id='content-3'>${data.officeNumber}</p></div></div></section></div>`;
};
/**
 * 
 * @param {repo[]} repos the array of relevant repo information
 */
 function generateEngineerCard(data){
    engineers.push(`<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${data.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${data.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${data.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${data.email}</p></div><div id='content'><h4 id='label-3'>GitHub: </h4><p id='content-3'>${data.github}</p></div></div></section></div>`);
};
/**
 * 
 * @param {repo[]} repos the array of relevant repo information
 */
 function generateInternCard(data){
    interns.push(`<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${data.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${data.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${data.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${data.email}</p></div><div id='content'><h4 id='label-3'>School: </h4><p id='content-3'>${data.school}</p></div></div></section></div>`);
};


/**
 * 
 * @param {repo[]} repos the array of relevant repo information
 */
 function generateCardsEngineer(cards){
    ret = "";
    cards.forEach(card => {
        ret = `${ret}<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${card.name}</h2><img src='../images/manager.img'><h3 id='job-title'>Engineer</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${card.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${card.email}</p></div><div id='content'><h4 id='label-3'>GitHub: </h4><p id='content-3'>${card.github}</p></div></div></section></div>\n`;
    });
    return ret;
}
/**
 * 
 * @param {repo[]} repos the array of relevant repo information
 */
 function generateCardsIntern(cards){
    ret = "";
    cards.forEach(card => {
        ret = `${ret}<div id='card-container'><section id='card'><div id='card-head'><h2 id='employee-name'>${card.name}</h2><img src='../images/manager.img'><h3 id='job-title'>${card.role}</h3></div><div id='card-content'><div id='content'><h4 id='label-1'>ID: </h4><p id='content-1'>${card.id}</p></div><div id='content'><h4 id='label-2'>Email: </h4><p id='content-2'>${card.email}</p></div><div id='content'><h4 id='label-3'>School: </h4><p id='content-3'>${card.school}</p></div></div></section></div>\n`;
    });
    return ret;
}

module.exports = generateHTML;



