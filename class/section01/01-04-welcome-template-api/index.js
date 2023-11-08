// Basic Example
// Caution - Not usable in real dev progress
function getWelcomeTemplate({name, age, memberOf, createdDate}){
    const welcomeTemplate = `
        <html>
            <body>
                <h1>Welcome! ${name}</h1>
                <hr/>
                <p>Full Name : ${name}</p>
                <p>Age : ${age}</p>
                <p>Member Of : ${memberOf}</p>
                <p>Joined Date : ${createdDate}</p>
            </body>
        </html>
    `

    console.log(welcomeTemplate);
    return welcomeTemplate;
}

const name = "Mark";
const age = "Unknown";
const memberOf = "Byte8Bit";
const createdDate = '2023-11-08';

getWelcomeTemplate({name, age, memberOf, createdDate});