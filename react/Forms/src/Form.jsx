import { useState } from "react"
export default function Form(){
    let [formData, setFormData] = useState({
            username:'',
            comment:'',
            rating:5
        })

    function handleFormData(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    function submitFormData(event){
        event.preventDefault();
        setFormData({
            username:'',
            comment:'',
            rating:5
        })
    }

    return(
        <>
            
            <form action="" onSubmit={submitFormData}>
                <label htmlFor="username">Enter you username</label><br />
                <input type="text" id="username" name="username" value={formData.username} onChange={handleFormData}/><br /><br />

                <label htmlFor="comment">Enter your experience</label><br />
                <textarea name="comment" id="comment" value={formData.comment} onChange={handleFormData}></textarea><br /><br />

                <label htmlFor="rating">Give us rating</label><br />
                <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleFormData}/><br /><br />

                <button>Submit</button>
            </form>
           
        </>
    )
}