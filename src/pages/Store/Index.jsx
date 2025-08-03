import NavBar from "../../components/NavBar/NavBar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Card from "./Card.jsx";
import classes from "./Store.module.css";
import { Link } from "react-router-dom";
import keys from "../../../Data/Keys.jsx";
import vips from "../../../Data/Vips.jsx";

const Store = () => {
  return (
    <>
      <NavBar />
      <div className={classes.content}>
        <div className={classes.storeMainContainer}>
          <p className={classes.discount}>
            Obtenha desconto de 5% no VIP de 3 meses e 10% no vip de 6 meses
          </p>
          <div className={classes.cardscontainer}>
            <div className={classes.cards}>
              <ul>
                {vips.map((vip) => (
                  <li key={vip.name} className={classes.storeItems}>
                    <Card
                      id={vip.id}
                      source={vip.source}
                      name={vip.name}
                      imgdesc={vip.imgdesc}
                      price={vip.price}
                      type={vip.type}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.cards}>
              <ul>
                {keys.map((key) => (
                  <li key={key.name} className={classes.storeItems}>
                    <Card
                      id={key.id}
                      source={key.source}
                      name={key.name}
                      imgdesc={key.imgdesc}
                      price={key.price}
                      type={key.type}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/Cart" className={classes.cart}>
          Veja seu carrinho de compras (WIP)
        </Link>
        <SideBar />
      </div>
    </>
  );
};

export default Store;
