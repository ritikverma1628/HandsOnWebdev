import './Item.css'

function Item({name, price, features}){
  let discountAvaialble=price>30000;
  let styles={backgroundColor:discountAvaialble ? "lightgreen" : ''}
  return (
    <>
      <div className='item'style={styles}>
        <h2>Item name: {name}</h2>
        <p>Item Price: {price}</p>
        <div className="features">{features.map((feature)=><li>{feature}</li>)}</div>
        {discountAvaialble ? <i>Discount of 5%</i> : null}
      </div>
    </>
  )
}

export default Item