import { useState } from "react";
import ShopItem from "../../components/ShopItem/Shopitem.jsx";
import data from "../../mockData/data.js";
import style from "./Shop.page.module.css";

const Shop = () => {
  const [fruits, setFruits] = useState(data);

  const search = (event) => {
    event.preventDefault();
    setFruits(data.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase())))
  };

  return (
    <>
      <form>
        <h2>Fruits and berries</h2>
        <input type="text" placeholder={"Search"} onChange={search} />
      </form>
      <div className={style.ShopPage}>
        {fruits.map((item, key) => {
          return <ShopItem key={"shopitem" + key} item={item} />;
        })}
      </div>
    </>
  );
};

export default Shop;
