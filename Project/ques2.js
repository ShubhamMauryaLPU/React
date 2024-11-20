let div=document.querySelector('div');
let p=document.querySelector('p');
let btn=document.querySelector('button');
function changeColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return (`rgb(${red},${green},${blue})`);
}
btn.addEventListener('click',function(){
    p.innerText=changeColor();
    div.style.backgroundColor=changeColor();
});
