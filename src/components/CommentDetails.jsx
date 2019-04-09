import React, { useState, useEffect} from "react";


function CommentDetails(props) {
    const [commentDetails, setCommentDetails] = useState([])

    async function getDetailApi(){
       try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.match.params.id}`);
        let commentDetails = await res.json();
        setCommentDetails(commentDetails);
       } catch(e){
           console.log(e)
       }
    }
    
    useEffect(()=>{
        getDetailApi()
    },[])

    return(
        <>
        <div className="card">
            <div className="card-body">
                <h3>{commentDetails.name}</h3>
                <p>{commentDetails.email}</p>
                <p>{commentDetails.body}</p>
                <p>post ID: {commentDetails.postId}</p>
            </div>
        </div>
        </>
    )
}

export default CommentDetails