import "./Amazon.css";
function Amazon({title,des,oldPrice,newPrice,img1}){
    let d=des.map((feture)=><li>{feture}</li>);
    return(
        <div className="mainDiv">
            
            <div className="innerDiv">
                <h3>{title}</h3>
                <img src={img1} alt="img"></img>
                <p>{d}</p>
            </div>
            <div>
                <p><span>{oldPrice}</span> {newPrice}</p>
            </div>
        </div>
    );
}
export default Amazon;