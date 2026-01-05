const userButton = document.getElementById("userButton");

userButton.addEventListener("click", async (e) => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const cardsContainer = document.createElement("div");

        data.forEach(user => {
            const card = document.createElement('div');
            card.innerHTML = `
                <h4>User ${user.id} info</h4>
                <ul>
                    <li>Name - ${user.name}</li>
                    <li>Username - ${user.username}</li>
                    <li>Email - ${user.email}</li>
                    <li>City - ${user.address.city}</li>
                    <li>Phone - ${user.phone}</li>
                    <li>Website - ${user.website}</li>
                    <li>Company - ${user.company.name}</li>
                </ul>`
            cardsContainer.appendChild(card);
        })

        document.querySelector("body").appendChild(cardsContainer);
    } catch(error) {
        console.error(error);
    }
})
