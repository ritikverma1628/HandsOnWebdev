import {useState} from 'react'

export default function LikeButton(){
    let[isLiked, setisLiked] = useState(false)
    let[numberOfClicks, setNumberOfClicks] = useState(0)

    function toggleLike(){
        setisLiked(!isLiked)
        setNumberOfClicks(numberOfClicks+1)
        console.log(`The like button was clicked ${numberOfClicks} times`)

    }

    return(
        <>
            <p onClick={toggleLike} >{isLiked==false ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={{color: 'red'}}></i> }</p>
         </>
    )
}