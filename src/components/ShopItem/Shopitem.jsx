import { Link } from "react-router-dom";
import style from "./Shopitem.module.css";
//import { shoppingCardState } from "../../states/shoppingCard.state";

const ShopItem = ({ item }) => {
  //const shoppingCardItems = shoppingCardState((state)=> state.shoppingCardItems);

  return (
    <Link
      to={"details/" + item.sku}
      className={style.ShopItem}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <p style={{ textDecoration: "underline" }}>{item.title}</p>
      <p>{item.weight.value + " " + item.weight.unit}</p>
      <p>${(item.price / 100).toFixed(2)}</p>
      <img src={item.image} className={style.img} alt={item.title} />
    </Link>
  );
};

export default ShopItem;
