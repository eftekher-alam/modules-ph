const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).then(res => res.json()).then(data => bind(data));

function bind(data) {
    const postContainer = document.querySelector("#post-container");
    for (const post of data) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.borderRadius = "8px";
        div.style.marginBottom = "16px";
        const title = document.createElement("h3");
        const postbody = document.createElement("p");
        title.innerText = post.title;
        postbody.innerText = post.body;
        div.append(title, postbody);
        postContainer.appendChild(div);
    }
}

