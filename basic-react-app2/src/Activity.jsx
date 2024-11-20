import "./Activity.css";
function Activity(props){

    return(
        <div className="mainDiv">
            <h2 style={{color:props.color}}> Hello! {props.name} </h2>
        </div>
    );
}
export default Activity;