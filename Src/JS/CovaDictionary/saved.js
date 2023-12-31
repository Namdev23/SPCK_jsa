const saved = JSON.parse(localStorage.getItem("Saved"));
const account = JSON.parse(localStorage.getItem("Account"));
const list = document.getElementById("list");
const btns = list.getElementsByTagName("button");

if (localStorage.getItem("Account") == undefined || account.covaDictionaryLogedin == false) {
    location = "/Src/Pages/CovaDictionary/account.html"
}

if (saved != undefined && saved.length > 0) {
    for (let i = 0; i < saved.length; i++) {
        let list = document.getElementById("list");

        let item = document.createElement("li");
        let title = document.createElement("h2");
        let btn = document.createElement("button");
        let icon = document.createElement("i");

        title.innerText = saved[i];
        item.classList.add("active")
        title.classList.add("active")
        btn.classList.add("active")
        icon.classList.add("fa-solid", "fa-trash", "active");

        btn.appendChild(icon);
        item.appendChild(title);
        item.appendChild(btn);
        list.appendChild(item);
    };
} else {
    let notify = document.createElement("h5");
    notify.innerText = "You haven't saved any words, please come back later.";
    notify.classList.add("active");

    list.appendChild(notify);
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let parent = this.parentNode;
    let value = parent.querySelector("h2").innerText;

    let index = saved.indexOf(value);
    console.log(value, index)
    let array = saved;
    if (index > -1) {
        array.splice(index, 1);
    };

    localStorage.setItem("Saved", JSON.stringify(array));

    parent.remove();
  });
}