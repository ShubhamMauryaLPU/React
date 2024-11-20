import "./ArrayR.css";
function ArrayR({title,price,features,feature}){
    return(
        <div className="mainDiv">
            <h3>{title}</h3>
           <p>{price}</p>
           <p>{features?.b}</p>
           <p>{feature}</p>
        </div>
    );
}
export default ArrayR;