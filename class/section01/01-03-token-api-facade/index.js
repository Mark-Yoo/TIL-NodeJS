function validatePhoneNumber(phoneNumber){
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.error("Error occured, please check if you entered your number correctly");
        return false;
    } else {
        return true;
    }
}

function getToken(){
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

function sendTokenViaSMS(token, phoneNumber){
    console.log(`Temporary token key ${token} was sent to ${phoneNumber}`);
}

function createTokenForPhone(phoneNumber){
    const isValid = validatePhoneNumber(phoneNumber);
    if (!isValid) return;
    let token = getToken();
    sendTokenViaSMS(token, phoneNumber);
}

createTokenForPhone("01012345678");