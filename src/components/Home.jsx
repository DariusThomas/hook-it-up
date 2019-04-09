import React, {useState, useEffect}  from "react";
import Comment from "./Comment"
function Home() {
    const [comments, setComments] =useState([])

async function getApi() {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/comments");
        let comments = await res.json();
        setComments(comments);
    } catch (e){
        console.log(e)
    }
}

    useEffect(()=>{
        getApi()
    },[])
return(
    <>
   {comments.map(comment=><Comment key ={comment.id} comment={comment} />)}
    </>
)
}

export default Home