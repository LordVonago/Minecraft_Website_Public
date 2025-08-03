import NavBar from "../../components/NavBar/NavBar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import classes from "./Staff.module.css";

const Staff = () => {
  const staff = [
    {
      id: 1,
      role: "[mod] ",
      nick: "Membro da equipe",
      skin: "./Membro da equipe.png",
    },
    {
      id: 2,
      role: "[mod] ",
      nick: "Membro da equipe",
      skin: "./Membro da equipe.png",
    },
    {
      id: 3,
      role: "[mod] ",
      nick: "Membro da equipe",
      skin: "./Membro da equipe.png",
    },
    {
      id: 4,
      role: "[Master] ",
      nick: "Membro da equipe",
      skin: "./Membro da equipe.png",
    },
  ];
  return (
    <>
      <NavBar />
      <div className={classes.content}>
        <div className={classes.container}>
          <p>*A disponibilidade dos membros da equipe pode variar </p>
          <ul className={classes.staff}>
            {staff.map((member) => (
              <li key={member.id} className={classes.skin}>
                <>
                  <p className={classes.nick}>
                    <span>{member.role}</span>
                    {member.nick}
                  </p>
                  <img src={member.skin} alt="skin" />
                </>
              </li>
            ))}
          </ul>
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default Staff;
