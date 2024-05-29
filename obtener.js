function getInfo() {
    const olUsers = document.querySelector("#info-users");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(user => {
        olUsers.innerHTML+=`
            <li class="user">
                <ul>
                    <li>
                        ${user.name}
                    </li>
                    <li>
                        ${user.email}
                    </li>
                    <li>
                        ${user.text}
                    </li>
                </ul>
            </li>
        `;
    });
}

getInfo();