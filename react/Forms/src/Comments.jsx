import { useState } from "react"
import Form from "./Form"
import './Comments.css'

export default function Comments(){
    let [comments, setComments] = useState([])

    function addComments(formData){
        setComments((prevComments)=>[...prevComments, {username: formData.username, comment: formData.comment, rating: formData.rating}])
    }
    

    return(
        <>
            <Form addComments={addComments}></Form>
            <h1>COMMENTS</h1>
            <div className="comments">

                {comments.map((comment, index)=>
                    <div className="comment" key={index}>
                        <p>{comment.username}</p>
                        <p>{comment.comment}</p>
                        <p>{comment.rating}</p>
                    </div>)
                }

            </div>
        
        </>
    )
}

