import "./LikeButton.css";
import { useState } from "react";
function LikeButton({img1}){
    let [isLiked,setIsLiked]=useState(false);
    function Click(){
        setIsLiked(!isLiked);
    }
    let col={color:"red"};
    return(
        <div className="mainDiv">
            
            <img src={img1} alt="img"></img>
            <div className="innerDiv1">
                <h3>my video</h3>
                <p>video discription</p>
            </div>
            <div onClick={Click} className="like">
                {
                    isLiked?<i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart" style={col}></i>
                }
            
            </div>
        </div>
    );
}
export default LikeButton;