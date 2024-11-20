import "./Card.css";
function Card({title,image,features}){
    
    return(
        
        <div className="mainDiv">
            <div>
                <img src={image}></img>
            </div>
            <div>
                <p>{title}</p>
                <p>{features}</p>
            </div>
            
        </div>
    );
}
export default Card;