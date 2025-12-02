function handleClick(event){
    console.log('the button was clicked')
    console.log(event)
}

function handleMouseOver(){
    console.log("Handling mouse over event")
}

function handleFormSubmit(event){
    event.preventDefault();
    console.log('form was submitted!')
}

export default function Event(){
    return(
        <>
            <button onClick={handleClick}>Submit</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam error possimus tempore consequatur aliquid quidem a maxime, maiores quaerat tenetur libero quam saepe quos accusantium id distinctio exercitationem eaque doloribus?
            Iste voluptate, non a culpa itaque beatae! Blanditiis, officia aspernatur. Voluptate magnam, delectus ab alias ex maxime iure expedita sed incidunt corrupti odit laudantium quia reprehenderit amet architecto voluptatibus dicta.</p>

            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="type something"/>
                <button>Submit</button>
            </form>
        </>
        
    )
}