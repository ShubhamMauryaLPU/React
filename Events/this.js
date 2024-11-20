let btn=document.querySelector('button');
let p=document.querySelector('p');
let h3=document.querySelector('h3');
function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}
btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
