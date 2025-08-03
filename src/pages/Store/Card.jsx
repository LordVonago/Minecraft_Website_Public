import classes from "./Store.module.css";
import { useState } from "react";

const Card = ({ type, id, source, imgdesc, name, price }) => {
  const [vipDuration, setPrice] = useState();
  switch (vipDuration) {
    case "1mes":
      break;
    case "3mes":
      price = price * 3;
      price = price - price * 0.05;
      break;
    case "6mes":
      price = price * 6;
      price = price - price * 0.1;
      break;
  }

  return (
    <>
      <img className={classes.item} src={source} alt={imgdesc} />
      <p className={classes.name}>{name}</p>
      {type === "vip" ? <p className={classes.duration}>Duração:</p> : []}
      {type === "vip" ? (
        <form>
          <select
            className={classes.durationSelect}
            name="Duration"
            onChange={(e) => setPrice(e.target.value)}
            value={vipDuration}
          >
            <option className={classes.durationSelect} value="1mes">
              1 Mês
            </option>
            <option className={classes.durationSelect} value="3mes">
              3 Meses
            </option>
            <option className={classes.durationSelect} value="6mes">
              6 Meses
            </option>
          </select>
        </form>
      ) : (
        []
      )}
      <p className={classes.price}>
        R$: {price.toFixed(2).toString().replace(".", ",")}
      </p>
      <div className={classes.cardbuybtns}>
        <button className={classes.buybtn}>Obter</button>
        <button className={classes.cartadd}>
          <i class="fa-solid fa-cart-arrow-down"></i>
        </button>
      </div>
    </>
  );
};

export default Card;
