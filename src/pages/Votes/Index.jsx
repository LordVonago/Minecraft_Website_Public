import NavBar from "../../components/NavBar/NavBar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import classes from "./Votes.module.css";

const Votes = () => {
  return (
    <>
      <NavBar />
      <div className={classes.content}>
        <div className={classes.container}>
          <article className={classes.votetop}>
            <h1>
              Utilize os links a seguir para votar no serviddor e receber
              recompensas no jogo!!!
            </h1>
          </article>
          <article className={classes.votelinks}>
            <p>
              Se seu servidor possui sites de recompensas vinculados,
              disponibilize aqui
            </p>
          </article>
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default Votes;
