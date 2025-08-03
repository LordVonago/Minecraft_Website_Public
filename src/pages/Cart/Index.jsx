import classes from "./Cart.module.css";
import NavBar from "../../components/NavBar/NavBar";
import CartCard from "./CartCard.jsx";

const Cart = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={classes.container}>
        <h2 className={classes.cart}>Seu carrinho de compras</h2>
        <ul className={classes.cartitem}>
          {products.map((product) => (
            <CartCard
              id={product.id}
              s={product.s}
              n={product.n}
              p={product.p}
              t={product.t}
              a="1"
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
