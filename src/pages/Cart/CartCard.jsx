import classes from "./Cart.module.css";
import { useState } from "react";

const CartCard = ({ id, t, n, p, s }) => {
  const [price, setPrice] = useState();
  if (price > 1) {
    p = price * p;
  }

  const defo = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <li className={classes.cartproduct} key={s + id}>
        <span className={classes.carttext}>{t}</span>
        <span className={classes.carttext} id={name}>
          {n}
        </span>
        <form>
          <input
            className={classes.amount}
            type="number"
            min="1"
            defaultValue="1"
            max={t === "vip" ? "1" : []}
            onChange={(e) => setPrice(e.target.value)}
            onSubmit={(e) => defo(e)}
          />
        </form>
        <span className={classes.carttext} id={classes.price}>
          {p.toFixed(2).toString().replace(".", ",")}
        </span>
      </li>
    </>
  );
};

export default CartCard;
