console.log("The number of student is 10:");
let n=10;
let arr=[10,20,30,40,50,60,70,80,90,10];
let avarage=(arr)=>{
    let avg=0;
    for(let i=0;i<n;i++){
        avg=avg + arr[i];
    }
    return avg/10;
}
console.log(avarage(arr)); 