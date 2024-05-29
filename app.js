function saveInfo() {
    const nameSent = document.querySelector("#name").value;
    const emailSent= document.querySelector("#email").value;
    const textSent = document.querySelector("#text").value;

    const users = JSON.parse( localStorage.getItem("users") ) || [];

    users.push({
        name: nameSent,
        email: emailSent,
        text: textSent
    });

    localStorage.setItem("users", JSON.stringify(users));
}