
function checkEmail(string){
    if(string.includes("@") && string.includes('.')) return true;
    return false;
}

function checkPassword(string){
    return string.length >= 5;
}

const validation = document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    
    if(!checkEmail(emailInput) && !checkPassword(passwordInput)){
        return alert("Failed to login");
    } 
    
    const tempStore = {
        'email' : emailInput,
        'password': passwordInput
    };

    localStorage.setItem(emailInput, JSON.stringify(tempStore));

});