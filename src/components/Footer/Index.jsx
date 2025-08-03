import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <p className={classes.terms}>
          <a href="/terms"> Termos de serviço | | </a>
        </p>
        <p>
          &copy;
          <a href="https://github.com/LordVonago" target="blank">
            {" "}
            By Andre Luiz Baierle
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
