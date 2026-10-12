//your code here!
const list = document.getElementById("list");

let count = 10;

// Add list items
function addItems(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");
        li.textContent = `List Item ${count + 1}`;
        list.appendChild(li);
        count++;
    }
}

// Add 10 items initially
addItems(10);

// Add 2 items when reaching the end
window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        addItems(2);
    }
});