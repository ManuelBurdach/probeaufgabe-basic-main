import { useParams } from "react-router-dom";
import data from "../../mockData/data.js";
import style from "./Details.page.module.css";
import { shoppingCardState } from "../../states/shoppingCard.state";

const Details = () => {
  const setShoppingCardItems = shoppingCardState(
    (state) => state.setShoppingCardItems
  );
  const shoppingCardItems = shoppingCardState(
    (state) => state.shoppingCardItems
  );
  const sku = useParams();
  const item = data.filter((item) => Number(sku.id) === Number(item.sku));
  return (
    <div
      className={style.DetailsItem}
      style={{ backgroundColor: item[0].backgroundColor }}
    >
      <div className={style.centerDiv}>
        <p style={{ textDecoration: "underline" }}>{item[0].title}</p>
        <p>{item[0].description}</p>
        <p>{item[0].weight.value + " - " + item[0].weight.unit}</p>
        <p>{(item[0].price / 100).toFixed(2)}€</p>
        <form>
          <input style={{ width: "60px" }} type="number" defaultValue="1" />
        </form>
        <button
          className={style.button}
          onClick={() => {
            setShoppingCardItems([...shoppingCardItems, item[0]]);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Details;
