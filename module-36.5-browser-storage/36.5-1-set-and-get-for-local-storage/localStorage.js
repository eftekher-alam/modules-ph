const addBtn = document.querySelector("#add-to-card");
showCardData();

addBtn.addEventListener("click", () => {
    const prodName = document.querySelector("#product-name").value;
    const prodQty = document.querySelector("#product-quantity").value;
    saveToLocal(prodName, prodQty);
});

function saveToLocal(prodName, prodQty) {
    const localData = getFromLocal();

    //Store object
    const card = localData[0];
    card[prodName] = prodQty;
    localStorage.setItem("card", JSON.stringify(card));

    //Store Array
    const myArray = localData[1];
    const myupdated = myArray.concat(...[10, 23, 45]);
    localStorage.setItem("myArray", JSON.stringify(myupdated));
    showCardData();
}

function getFromLocal() {
    let card = {};
    let arrayreturn = [];

    //Get Object
    const localData = localStorage.getItem("card");
    if (localData) {
        card = JSON.parse(localData);
    }

    //Get Array
    const myArray = localStorage.getItem("myArray");
    if (myArray) {
        arrayreturn = arrayreturn.concat(...JSON.parse(myArray));
    }

    return [card, arrayreturn];
}

function showCardData() {
    const localData = getFromLocal();

    //Store object
    const card = localData[0];
    const cardItemContianer = document.querySelector("#card-item-contianer");
    cardItemContianer.innerHTML = "";
    for (const product in card) {
        const li = document.createElement("li");
        li.innerHTML = `<p>${product} : ${card[product]}</p>`;
        cardItemContianer.appendChild(li);
    }
}

// little change