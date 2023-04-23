import React from "react";
import profile from "../../assets/profile.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.landing_section}>
        <div className={classes.info}>
          <h1 className={classes.heading}>
            Hi There..<br/>Shruti Dikkar{" "}
          </h1>
          <p className={classes.para}>
          Currently I am pursuing B.E in Computer Engineering. 
          I am very passionate towards my work and hardworking. 
          I like to learn new things and improve my knowledge. 
          I have Knowledge of programming language and web development.
          Enthusiastic team player ready to contribute to success.
          To seek and maintain full-time position that offers professional challenges utilizing 
          interpersonal skills, excellent time managements and problem-solving skills.
          </p>
          <div className={classes.cv}>
          <a href="https://drive.google.com/file/d/1rTt4POa5XjXww4Ap0jiJAb4DV8w7IEym/view?usp=drivesdk">
            Download CV
            </a>
         </div>
        </div>
        <div className={classes.container}>
          <img className={classes.image} src={profile} alt="" />
        </div>
        
      </div>
    </>
  );
};

export default Home;
