import Card from "./Card";
import './CardsTab.css'

function CardsTab() {
  return (
    <>
      <div className="cardsTab">
        <Card
          productName="LogiTech MX Master"
          features={["8000 DPI", "5 Programmable Buttons"]}
          price={12495}
          discountedPrice={8999}
        ></Card>
        <Card
          productName="Apple Pencil(2nd Gen)"
          features={["Intuitive Touch Surface", "Desinged for Ipad Pro"]}
          price={11900}
          discountedPrice={9199}
        ></Card>
        <Card
          productName="Zebronics"
          features={["Intuitive Touch Surface", "Desinged for Ipad Pro"]}
          price={1599}
          discountedPrice={899}
        ></Card>
        <Card
          productName="Petronics Toad"
          features={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
          price={599}
          discountedPrice={278}
        ></Card>
      </div>
    </>
  );
}

export default CardsTab;
