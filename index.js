const mainDiv = document.getElementById("main-div");

async function getData() {
    try {
        const result = await fetch("https://fakestoreapi.com/products/");
        const data = await result.json();

        data.forEach((item) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="heart.png" class="wishlist-icon" alt="">
                <div class="card__image" style="background-image:url('${item.image}')"></div>
                
                <div class="card__content">
                    <h2 class="title">${item.title}</h2>
                    <p class="subtitle">${item.description}</p>
                    <h4>Price: Rs ${item.price}</h4>
                </div>
            `;

            mainDiv.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

getData();