import "./ArrayR.css";
function Element({title,price,features}){
    const list=features.map((feature)=><li>{feature}</li>);
    return(
        <div className="mainDiv">
            <h3>{title}</h3>
           <p>{price}</p>
           <p>{list}</p>
        </div>
    );
}
export default Element;