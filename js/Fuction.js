function Info(name,age){
    console.log(`${name}'s age is ${age}.`);
}
// let x=prompt("Enter first Num: ");
// let y=prompt("Enter second Num: ");
// Info(x,y);
function sum(a,b){
    console.log(a+b);
}
function printNum(n){
    let arr=[];
    for(let i=0;i<=n;i++){
        arr.push(i);
    }
    return arr;
}
function print(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
function OddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else{
        console.log("wrong request");
    }
}
const student={
    name: "shubham",
    marks: 94,
    getName(){
        return this.name;
    },
    getMarks:()=>{
        return this.marks;
    }
};
// console.log(student.getName());
// console.log(student.getMarks());
function marks(a,b=2){
    return a+b;
}
console.log(marks(1));