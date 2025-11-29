function Item({name, price, features}){
  return (
    <>
      <h2>Item name: {name}</h2>
      <p>Item Price: {price}</p>
      <div>{features.map((feature)=><li>{feature}</li>)}</div>
    </>
  )
}

export default Item