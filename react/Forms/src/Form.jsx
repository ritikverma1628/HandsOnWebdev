import { useState } from "react"
import './Form.css'
export default function Form({addComments}){
    let [formData, setFormData] = useState({
            username:'',
            comment:'',
            rating:5
        })

    function handleFormData(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    function submitFormData(e){
        e.preventDefault();
        addComments(formData)
        setFormData({
            username:'',
            comment:'',
            rating:5
        })
    }

    return(
        <>
            
            <form action="" onSubmit={submitFormData} className="form">
                <h1 style={{textAlign:'center', marginTop:'0px', paddingTop:'0px'}}>COMMENT FORM</h1>
                <label htmlFor="username">Enter you username</label><br />
                <input type="text" id="username" name="username" value={formData.username} onChange={handleFormData}/><br /><br />

                <label htmlFor="comment">Enter your experience</label><br />
                <textarea name="comment" id="comment" value={formData.comment} onChange={handleFormData}></textarea><br /><br />

                <label htmlFor="rating">Give us rating</label><br />
                <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleFormData}/><br /><br />

                <button>Submit</button>
            </form>

            <br /><br />
            <hr />
           
        </>
    )
}