import { Link } from "react-router-dom"
import style from "./ShopingCard.module.css"
import ShoppingCardImg from "../../../public/cart.png"

const ShoppingCard = () => {
    return(
        <div className={style.ShoppingCard}>
           <img src={ShoppingCardImg}/>
        </div>
    )
}

export default ShoppingCard