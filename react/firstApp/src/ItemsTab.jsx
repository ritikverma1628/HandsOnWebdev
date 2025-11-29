import Item from "./Item";

function ItemsTab() {
  return (
    <>
      <Item name={'Laptop'} price={50000} features={['fast charging','long battery']}/>
      <Item name={'Mobile'} price={25000} features={['water proof','gorilla glass']}/>
      <Item name={'Bottle'} price={500} features={['stainless steel', '1litre']}/>
    </>
  );
}

export default ItemsTab;
