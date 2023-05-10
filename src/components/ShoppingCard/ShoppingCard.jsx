import { Link } from "react-router-dom";
import style from "./ShopingCard.module.css";

const ShoppingCard = ({ shoppingCardItems }) => {
  return (
    <Link className={style.ShoppingCard}>
      <img src={window.location.origin + "/cart.png"} alt="shopping card" />
      <p>{shoppingCardItems.length}</p>
    </Link>
  );
};

export default ShoppingCard;
