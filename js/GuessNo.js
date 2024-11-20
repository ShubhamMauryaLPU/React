let max=prompt("Enter the max no: ");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter the guess no: ");
// console.log(max+" "+random+" "+guess);
while(true){
    if(guess=="quit"){
        break;
    }
    if(guess==random){
        console.log("Congrats...");
        break;
    }
    else{
        guess=prompt("Worng guess . Try again");
    }
}