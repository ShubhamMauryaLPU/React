function Click(){
    console.log("button was clicked");
}
function Button(){
    return(
        <div>
            <button onClick={Click}>Click me!</button>
        </div>
    );
}
export default Button;