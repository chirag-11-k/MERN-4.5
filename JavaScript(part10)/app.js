let rgb = () =>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red} ${green} ${blue})`
    return color;
}

let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
   console.log(`1`,rgb())
});

btn.addEventListener('click',()=>{
    let h3 = document.querySelector('h3');
    h3.innerHTML = rgb();
    let div = document.querySelector('div');
    div.style.backgroundColor = rgb();
   console.log(`2`,rgb())
});
