import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div>
      <aside className={classes.lateralBar}>
        <div className={classes.user}>
          <p className={classes.nickname}>Player Name</p>
          <img
            className={classes.playerHead}
            src="https://crafatar.com/avatars/<player UUID>"
            alt="Player head using Crafatar"
          />
        </div>
        <section className={classes.discord}>
          <iframe
            src="https://discord.com/widget?id=<Server ID>&theme=dark"
            allowtransparency="true"
            lang="pt-br"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </section>
      </aside>
      <section className={classes.contact}>
        <p>Siga-nos nas redes sociais</p>
        <i className="fa-brands fa-instagram">
          <p>Instagram</p>
        </i>

        <i className="fa-brands fa-youtube">
          <p>Youtube</p>
        </i>
        <br />
        <p>Acesse nossa comunidade</p>
        <i className="fa-brands fa-discord">
          <p>Discord</p>
        </i>
      </section>
    </div>
  );
};

export default SideBar;
