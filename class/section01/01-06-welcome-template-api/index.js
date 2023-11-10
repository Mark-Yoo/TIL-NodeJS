function checkEmail(email){
    return !(!email || !email.includes("@"));
}

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
    `;

    console.log(welcomeTemplate);
    return welcomeTemplate;
}

function sendTemplateToEmail({ email, welcomeTemplate }){
    console.log(`Template, ${welcomeTemplate}, was sent to ${email}`);
}

function createUser({ name, age, memberOf, email, createdDate }){
    // 1. Validate email
    const isValid = checkEmail(email);
    if (!isValid) return;

    // 2. Create welcome template
    const welcomeTemplate = getWelcomeTemplate({ name, age, memberOf, createdDate})

    // 3. Send welcome template via email
    sendTemplateToEmail({ email, welcomeTemplate });
}

const name = "Mark";
const age = "Unknown";
const memberOf = "Dev group";
const email = "abcde@gmail.com";
const createdDate = "2023-11-09";

createUser({ name, age, memberOf, email, createdDate });