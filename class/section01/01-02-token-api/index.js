// Bad Example - for an easy explanation
// function createTokenForPhone(phoneNumber){
//     // 1. Check if the digit for phone number is correct or not
//     if (phoneNumber.length >= 10) {
//         if (phoneNumber.length <= 11) {
//             // 2. Create 6 digit token number
//             const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//             // 3. Send created token to phone
//             console.log(`Temporary token key ${token} was sent to ${phoneNumber}`);
//         } else {
//             console.error("Error occured, please check if you entered your number correctly");
//         }
//     } else {
//         console.error("Error occured, please check if you entered your number correctly");
//     }
// }

// Better Example - early-exit pattern
function createTokenForPhone(phoneNumber){
    // 1. Check if the digit for phone number is correct or not
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.error("Error occured, please check if you entered your number correctly");
        return;
    }
    // 2. Create 6 digit token number
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    // 3. Send created token to phone
    console.log(`Temporary token key ${token} was sent to ${phoneNumber}`);
}

createTokenForPhone("01012345678");