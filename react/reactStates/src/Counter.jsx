export default function Counter(){
    let count = 0 ;

    function increaseCount(){
        count = count+1;
        console.log(count);
    }
    
    return(
        <>
            <p onClick={increaseCount}>Count={count}</p>
        </>
    )
}