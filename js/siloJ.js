const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signUpMail = document.getElementById("sign-up-mail");
const signUpPass = document.getElementById("sign-up-pass");
const signUpMailError = document.getElementById("sign-up-mail-error");
const signUpPassError = document.getElementById("sign-up-pass-error");

const signInMail = document.getElementById("sign-in-mail");
const signInPass = document.getElementById("sign-in-pass");



let users = [];
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.querySelector("#real-sign-up-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const email = signUpMail.value.trim();
    const password = signUpPass.value.trim();

    let isValid = true;

    if (!validateEmail(email)) {
        signUpMailError.textContent = "Invalid email format.";
        signUpMailError.style.display = "block";
        isValid = false;
    } else {
        signUpMailError.style.display = "none";
    }

    if (!validatePassword(password)) {
        signUpPassError.textContent = "Password must be 8+ characters, include an uppercase letter, a number, and a special character.";
        signUpPassError.style.display = "block";
        isValid = false;
    } else {
        signUpPassError.style.display = "none";
    }

    if (isValid) {
        users.push({ email, password });
        // alert("Sign-up successful!");
        // container.classList.remove("right-panel-active");
        setTimeout(()=>{
            window.location.href="index.html"
            signUpMail.value = "";
            signUpPass.value = "";

        },1000)
    }
    
});





// Sign-In Button Event Listener
document.querySelector(".sign-in-container button").addEventListener("click", (e) => {
    e.preventDefault();

    const email = signInMail.value.trim();
    const password = signInPass.value.trim();

    
    
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        alert("Sign-In successful! Welcome back!");
        setTimeout(()=>{
            window.location.href="index.html"
            signInMail.value = "";
            signInPass.value = "";
        },1000)
        // Clear inputs
    } else {

        alert("Invalid email or password. Please try again.");
    }
});
