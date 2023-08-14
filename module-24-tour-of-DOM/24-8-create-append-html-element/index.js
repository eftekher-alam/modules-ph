//select parent
const divisions = document.getElementById("divisions");

//create html element
const li = document.createElement("li");
li.innerText = "Chittagong";

//append to the parent
divisions.appendChild(li);


//create html element
const li2 = document.createElement("li");
li2.innerHTML = `<li>Barishal</li>`;

divisions.appendChild(li2);