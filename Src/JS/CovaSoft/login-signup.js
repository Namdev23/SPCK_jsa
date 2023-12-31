const login = document.getElementById("loginForm");
const signup = document.getElementById("signupForm");
const emailDomains = ["@gmail.com", "@outlook.com"];

login.addEventListener("submit", (e) => {
    e.preventDefault();

    let values = {
        Email: document.querySelector("form#loginForm > input.email").value,
        Pass: document.querySelector("form#loginForm > input#password").value,
    }

    if (localStorage.getItem("Account") != undefined) {
        let account = localStorage.getItem("Account");
        account = JSON.parse(account);
        if (values.Email == account.email && values.Pass == account.password) {
            location = "/Src/Pages/CovaSoft/";
        }
        else if (!emailDomains.some(i => values.Email.includes(i))) {
            document.querySelector("form#signupForm > input.email").style.backgroundColor = "rgb(150, 50, 50)";
            alert("Invaild email");
        }
        else if (values.Pass != account.password) {
            document.querySelector("form#signupForm > input#password1").style.backgroundColor = "rgb(150, 50, 50)";
            alert("Your password is wrong");
        }
    }
    else {
        alert("No account exist on this device");
    }
});

signup.addEventListener("submit", (e) => {
    e.preventDefault();

    let values = {
        Email: document.querySelector("form#signupForm > input.email").value,
        Pass: document.querySelector("form#signupForm > input#password1").value,
        RePass: document.querySelector("form#signupForm > input#password2").value,
    }

    if (emailDomains.some(i => values.Email.includes(i)) && values.Pass.length >= 6 && values.Pass == values.RePass && localStorage.getItem("Account") == undefined) {
        let account = {
            email: values.Email,
            userName: "User" + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10) + Math.round(Math.random() * 10),
            password: values.RePass,
            covaDictionaryLoggedin: false,
            avatar: "/Assets/Icons/user.png",
        }
        localStorage.setItem("Account", JSON.stringify(account));
        login.style = "display: block";
        signup.style = "display: none";
    }
    else if (!emailDomains.some(i => values.Email.includes(i))) {
        document.querySelector("form#signupForm > input.email").style.backgroundColor = "rgb(255, 150, 150)";
        alert("Địa chỉ Email không chính xác");
    }
    else if (values.Pass.length < 6) {
        document.querySelector("form#signupForm > input#password1").style.backgroundColor = "rgb(255, 150, 150)";
        alert("Mật khẩu phải dài hơn 6 ký tự");
    }
    else if (values.Pass != values.RePass) {
        document.querySelector("form#signupForm > input#password2").style.backgroundColor = "rgb(255, 150, 150)";
        alert("Mật khẩu không khớp");
    }
});

document.querySelector('form#signupForm > a').addEventListener("click", () => {
    login.style = "display: block";
    signup.style = "display: none";
});

document.querySelector('form#loginForm > a').addEventListener("click", () => {
    signup.style = "display: block";
    login.style = "display: none";
});