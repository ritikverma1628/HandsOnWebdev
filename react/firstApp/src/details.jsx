import './details.css'

function Description({productName, features}){
    return(
        <>
            <h4>{productName}</h4>
            <div>{features.map((feature) => <p>{feature}</p>)}</div>
        </>
    )
}

function Price({price, discountedPrice}){
    return(
        <>
        <div className="price"><del style={{display:'inline'}}>{price}</del>&nbsp;&nbsp;<span><b>{discountedPrice}</b></span></div>
        </>
    )
}


export {Description, Price}