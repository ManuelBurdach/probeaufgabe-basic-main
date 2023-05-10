import { Link } from "react-router-dom";

const ShopItem = ({item}) => {
    return (<Link className="ShopItem" to={"itemDetails"+item.sku}>
        <p>{item.title}</p>
    </Link>)
}

export default ShopItem;