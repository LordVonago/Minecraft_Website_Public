import classes from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className={classes.content}>
        <div className={classes.maincontainer}>
          <article className={classes.text}>
            <h1>Porque uma doação?</h1>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum
            inventore quibusdam hic <br /> assumenda facilis minus, dicta
            possimus est a cum at illo, illum delectus sit rerum debitis?
            Eligendi, quasi.
          </article>
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default Home;
