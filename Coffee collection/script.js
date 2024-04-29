function renderRatingIcon(item) {
    return item.votes ? "resources/Star_fill.svg" : "resources/Star.svg";
}

function renderRating(item) {
    return item.rating ? `<span class="rating">${item.rating}</span>` : "No Ratings";
}

function renderVotes(item) {
    return item.votes ? `(${item.votes} votes)` : "";
}

function checkAvailability(item) {
    return item.available ? "" : "Sold Out";
}

function checkPopularity(item) {
    return !item.popular ? "none" : "block";
}

function renderItemCard(item) {
    const card = document.createElement("div");
    const cardHTML = `
            <div class="item col position-relative pb-5">
                <div class="popular d-${checkPopularity(item)}">Popular</div>
                <img
                    class="item-image"
                    src="${item.image}"
                />
                <div class="px-2 py-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>${item.name}</h2>
                        <span class="price">${item.price}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="d-flex align-items-center gap-1">
                            <img src="${renderRatingIcon(item)}" alt="Rating" />
                            <p class="m-0">${renderRating(item)} ${renderVotes(item)}</p>
                        </div>
                        <div class="sold-out">${checkAvailability(item)}</div>
                    </div>
                </div>
            </div>
    `;

    card.setAttribute("class", "item col");
    card.innerHTML = cardHTML;

    container.append(card);
}

async function fetchCollection(filter) {
    const url =
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
    const response = await fetch(url);
    const data = await response.json();

    if (!filter) data.map((item) => renderItemCard(item));
    else
        data.filter((item) => {
            if (item.available) renderItemCard(item);
        });
}

const container = document.getElementById("items-wrapper");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Reset container content to empty
        container.innerHTML = "";

        // Reset classlist of buttons to default
        buttons.forEach((button) => button.classList.remove("button-active"));

        // Add active class to clicked button
        e.target.classList.add("button-active");

        if (e.target.dataset.content === "products-all") fetchCollection(false);
        else fetchCollection(true);
    });
});
