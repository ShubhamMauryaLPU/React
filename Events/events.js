// let btn=document.querySelector('button');
// console.dir(btn);
// btn.onclick=function(){
//     alert("button was clicked");
// }

let btns=document.querySelectorAll('button');
for(btn of btns){
    btn.onclick=sayHello;
}
function sayHello(){
    alert("Hello!");
}
// btn.onclick=sayHello;