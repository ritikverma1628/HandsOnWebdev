import { Description, Price } from "./details";
import "./Card.css";

function Card({ productName, features, price, discountedPrice }) {
  return (
    <>
      <div className="card">
        <div className="cardDescription">
          <Description
            productName={productName}
            features={features}
          ></Description>
        </div>

        <div className="cardPrice">
          <Price price={price} discountedPrice={discountedPrice}></Price>
        </div>
      </div>
    </>
  );
}

export default Card;
