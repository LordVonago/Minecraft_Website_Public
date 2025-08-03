import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <Link to="/">
          <figure>
            <img className={classes.logo} src="./images.png" alt="Sua logo" />
          </figure>
        </Link>
        <section className={classes.destiny}>
          <nav className={classes.navbarbtn}>
            <Link to="/">Home</Link>
            <Link to="/store">Loja</Link>
            <Link to="/votes">Votos </Link>
            <Link to="/staff">Equipe </Link>
          </nav>
        </section>

        <section className={classes.userskinhead}>
          <figure>
            <img
              className={classes.playerHead}
              src="https://crafatar.com/avatars/<player UUID>"
              alt="Player Head using Crafatar"
            />
          </figure>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
