let arr=[{
    name:"shubham",
    marks:93
},
{
    name:"kumar",
    marks:93.1
},
{
    name:"maurya",
    marks:93.2
}];
arr.forEach((student)=>{
    console.log(student.marks);
});
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});
console.log(double);
let nums=[2,4,1,5,6,2,7,8,9];
let even=nums.filter((el)=>{
    return el%2==0;
});
console.log(even);


let result= num.reduce((res,el)=>{return res+el});
console.log(result);