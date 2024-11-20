// let arr=["shubham","kumar","maurya"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log(arr);
// let x=prompt("Enter the first no: ");
// let y=prompt("Enter the second no: ");
// console.log(x+y);
// console.log(typeof(x));
// let arr=["apple","papaya","banana","pineapple"];
// console.log(arr);
// console.log(arr.length)
// arr[8]="cherry";
// console.log(arr);
// console.log(arr.length);
// arr[0]="kiwi";
// console.log(arr);
// let arr1=[[1,2],[3,4],[5,6]];
// console.log(arr1);
// arr1[0].push(5);
// console.log(arr1);
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
// }
// let arr1=[["a","b","c"],["d","e","f"]];
// for(let i=0;i<arr1.length;i++){
//     console.log(`array ${arr1[i]}`);
//     for(let j=0;j<arr1[i].length;j++){
//         console.log(arr1[i][j]);
//     }
// }
let arr=[1,2,3,4,5,6];
// let v = arr.map(Math.pow(arr,2));
// console.log(v);
let v=[];
for(let i=0;i<arr.length;i++){
    // console.log(Math.pow(arr[i],2));
    v[i]=Math.pow(arr[i],2);
}
// console.log(v);
let d=function text(a){
    return a*10;
}
let c=arr.map(d);
console.log(c);
