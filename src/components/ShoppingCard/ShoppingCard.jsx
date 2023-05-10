import style from "./ShopingCard.module.css"
//import ShoppingCardImg from "../../../public/cart.png"

const ShoppingCard = () => {
    const ShoppingCardItems = 0;
    return(
        <div className={style.ShoppingCard}>
           <img src={window.location.origin + "/cart.png"} alt="shopping card"/> 
           <p>{ShoppingCardItems}</p>
        </div>
    )
}

export default ShoppingCard