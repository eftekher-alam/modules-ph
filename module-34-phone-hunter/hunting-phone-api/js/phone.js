const showAllBtn = document.querySelector("#show-all-btn");
const phoneContainer = document.querySelector("#phone-container");


const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
    phoneContainer.innerText = "";
    let searchTxt = document.querySelector("#search-input").value;
    GetPhones(searchTxt);
    if (!showAllBtn.classList.contains("hidden")) {
        showAllBtn.classList.add("hidden");
    }
});

showAllBtn.addEventListener("click", () => {
    phoneContainer.innerText = "";
    let searchTxt = document.querySelector("#search-input").value;
    GetPhonesAll(searchTxt);
    if (!showAllBtn.classList.contains("hidden")) {
        showAllBtn.classList.add("hidden");
    }
});

const GetPhonesAll = async (searchTxt) => {
    showLoadding(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchTxt}`;
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;
    BindPhones(data);
}


const GetPhones = async (searchTxt) => {
    showLoadding(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchTxt}`;
    const response = await fetch(url);
    const json = await response.json();
    let data = json.data;
    toggleShowAllBtn(data);
    if (data.length > 6)
        data = data.slice(0, 6);
    BindPhones(data);
}


const BindPhones = (phones) => {
    const phoneContainer = document.querySelector("#phone-container");
    phoneContainer.innerText = "";
    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList = "card bg-base-100 shadow-xl";
        phoneCard.innerHTML = ` 
            <figure><img src="${phone.image}" alt="${phone.phone_name}" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>`;
        phoneContainer.appendChild(phoneCard);
    });
    showLoadding(false);
}

const toggleShowAllBtn = (data) => {
    if (data.length > 6 && showAllBtn.classList.contains("hidden")) {
        showAllBtn.classList.remove("hidden");
    }
    else if (data.length <= 6 && !showAllBtn.classList.contains("hidden")) {
        showAllBtn.classList.add("hidden");
    }
}

const showLoadding = (isShow) => {
    const loadingContianer = document.querySelector("#loading-contianer");
    if (isShow) {
        loadingContianer.classList.remove("hidden")
    }
    else {
        loadingContianer.classList.add("hidden");
    }
}



