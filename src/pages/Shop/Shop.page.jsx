import ShopItem from "../../components/ShopItem/Shopitem.jsx";
import data from "../../mockData/data.js";


const Shop = () => {
    return (<div>
    {data.map((item,key)=>{
        return <ShopItem key={"shopitem"+key} item={item}/>
    })}</div>)
}

export default Shop;