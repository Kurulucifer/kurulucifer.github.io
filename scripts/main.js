const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fu-xuan.webp") {
        myImage.setAttribute("src", "images/jingliu.webp");
    } else {
        myImage.setAttribute("src", "images/fu-xuan.webp");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Run away, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Run away, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

