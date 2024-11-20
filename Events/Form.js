let form=document.querySelector('form');
// form.addEventListener('submit',function (event){
//     event.preventDefault();
//     let inp=document.querySelector('input');
//     console.log(inp.value);
//     console.dir(inp);
// });
form.addEventListener('submit',function (event){
    event.preventDefault();
    console.dir(form);
    // let user=this.elements[0];
    // console.log(user);
    console.log(this.elements[0]);
    let u=this.elements[0];
    console.log(u);
});