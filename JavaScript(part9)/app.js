// let imgOBJ = document.getElementById('mainImg');
// imgOBJ.style.width="300px";
let body = document.querySelector('body');
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let btn = document.createElement('button');
// let p = document.createElement('p');


// h1.innerHTML = `i'm in div`;
// p.innerHTML = `Me too!`;
// btn.innerHTML ="click me";

// body.appendChild(div);
// div.appendChild(h1);
// div.appendChild(p);

// div.classList.add("div-style");

// div.insertAdjacentElement('beforebegin',btn);
// btn.style.marginBottom = '10px';


let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerHTML = "Click me";
body.appendChild(input); 
body.appendChild(btn);
input.placeholder = "Username";

btn.setAttribute('id', 'btn');
document.querySelector('#btn').style.backgroundColor = "blue";
document.querySelector('#btn').style.color = "white";

let header = document.createElement('h1')
header.innerHTML = "DOM Practice"
header.style.textDecoration = "Underline";
header.style.color = "purple";
body.prepend(header);

let p2 = document.createElement('p');
p2.innerHTML = "Apna College <b> Delta </b> Practice";
body.appendChild(p2);

// btn.onclick = () => {alert('good bye')}
btn.ondblclick = sayHello;
function sayHello (){ 
    alert('Hello');
}