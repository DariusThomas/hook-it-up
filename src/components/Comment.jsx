import React from "react";
import { Link } from "react-router-dom"
function Comment(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3>{props.comment.name}</h3>
                <Link className="btn btn-outline-primary" to={`/${props.comment.id}/details`}>Show More</Link>
            </div>
        </div>
    )
}

export default Comment