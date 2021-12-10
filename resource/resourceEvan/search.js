const f = document.getElementById('form');
const q = document.getElementById('query');
let linkTag = document.querySelector("a");

function submitted(event) {
    event.preventDefault();   
    const url = './MainMenu.html'; // + q.value;
    linkTag.setAttribute("href",url);
    linkTag.click();
}

f.addEventListener('submit', submitted);