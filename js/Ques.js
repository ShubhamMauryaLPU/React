while(true){
    let gess=prompt("Enter the movie name :");
    if(gess=="Avtar"|| gess== "avtar"){
        console.log("you are right");
        break;
    }
    else{
        console.log("you are wrong");
    }
    let choice=prompt("Do you want to gess more [y/n]: ");
    if(choice=='n'){
        break;
    }

}