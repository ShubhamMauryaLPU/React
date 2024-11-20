let input=document.querySelector('input');
let ul=document.querySelector('ul');
let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    console.log(input.value);
    let item=document.createElement("li");
    item.innerText=input.value;
    let delBtn=document.createElement('button');
    delBtn.classList.add("del");
    delBtn.innerText="delete";
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
});
