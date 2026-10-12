const list = document.getElementById("infi-list");

let count = 0;

function addItems(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count + 1}`;
        list.appendChild(li);
        count++;
    }
}

// Add 10 items initially
addItems(10);

// Add 2 items when the list reaches the end
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        addItems(2);
    }
});