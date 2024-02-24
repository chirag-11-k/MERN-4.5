
let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener('click',()=>{
 let value = input.value;
 input.value = "";
 let li = document.createElement('li');
 li.innerText = value;
 ul.appendChild(li);
 let delBtn = document.createElement('button');
 delBtn.innerText="delete";
 delBtn.classList.add('delete');
 li.appendChild(delBtn);
});

//Event delegation
ul.addEventListener('click',(Event)=>{
// console.log(Event.target.nodeName);
if(Event.target.nodeName=="BUTTON"){
     // console.log("delete");
     let ListItem = Event.target.parentElement;
     // console.log(ListItem);
     ListItem.remove();
}
else{
     // console.log("Don't delete");
}

})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//    delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//    });
//  }

