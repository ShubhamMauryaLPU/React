import { useState } from "react";
import "./Comments.css";
import CommentForm from "./CommentForm";
export default function Comments(){
    let [comments,setComments]=useState([{
        username: "@Sk",
        remarks: "Great Job!",
        rating: 4,
    }]);

    let addNewComment=(comment)=>{
        setComments((currComment)=>{
            return[

                ...currComment,
                comment
            ]
        });
    }
    return (
        <>
        <div >
            <h3>All Comments</h3>
            {
                comments.map((comment,idx)=>{

                        return(
                            <div key={idx} className="comment">
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>{comment.rating}</span>
                        <br/>
                        <span>{comment.username}</span>
                        </div>
                        );
                }
                )
}
        </div>
        <hr/>
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}