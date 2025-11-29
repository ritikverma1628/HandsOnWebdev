import './Item.css'

function Item({name, price, features}){
  return (
    <>
      <div className='item'>
        <h2>Item name: {name}</h2>
        <p>Item Price: {price}</p>
        <div className="features">{features.map((feature)=><li>{feature}</li>)}</div>
      </div>
    </>
  )
}

export default Item