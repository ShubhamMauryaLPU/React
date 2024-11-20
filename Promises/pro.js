

function saveToDB(data){
    return new Promise((success,failure)=>{
        let internateSpeed=Math.floor(Math.random()*10)+1;
        if(internateSpeed>4){
            success("Success : Data was saved");
        }else{
            failure("Failed : Week connection");
        }
    });
}
// let request=saveToDB("shubham");
// request.then(()=>{
//     console.log("Promise was resolved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });
saveToDB("shubham").then(()=>{
    console.log("Promise was resolved");
})
.catch(()=>{
    console.log("Promise was rejected");
});