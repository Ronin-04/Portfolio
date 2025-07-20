import Styles from "./LandingPage.module.css";
import nightBtn from "/nightmode.svg";
import heading from "/HEADING.svg";
import profile from "/portfolio.png";
import linkedin from "/LinkedIN.svg";
import github from "/GitHub.svg";
import insta from "/Instagram.svg";
import twitter from "/Twitter.svg";

const LandingPage = () => {
  return (
    <>
      <div className={Styles.navBar}>
        <div className={Styles.portfoliotext}>PORTFOLIO</div>
        <div className={Styles.navigation}>
          <div className={Styles.navLinks}>
            <a href="#home" className="">
              Home
            </a>
            <a href="#about" class="">
              About
            </a>
            <a href="#projects" class="">
              Projects
            </a>
            <a href="#connect" class="">
              Connect
            </a>
          </div>
        </div>
        <div className={Styles.nightmode}>
          <img src={nightBtn} alt="nbtn" className={Styles.img} />
        </div>
      </div>

      <div className={Styles.mainContainer}>
        <div className={Styles.Intro}>
          <div className={Styles.heading}>
            <img src={heading} alt="salute text" className={Styles.saluteimg} />
            <div className={Styles.saluteText}>"Hello World...."</div>
          </div>
          <div className={Styles.name}>
            I'm <span className={Styles.nameSpan}>Rupam Samanta</span> ,
          </div>
          <div className={Styles.shortintro}>
            A Enthusiastic <span className={Styles.webSpan}>Web Developer</span>{" "}
            passionate about intuitive UI design and familiar to Server Logics.
            Patent Holder for Project{" "}
            <span className={Styles.patentSpan}>Third Eye</span> ,{" "}
            <span className={Styles.cloudSpan}>GCP</span> Practitioner. From
            fixing bugs to unlocking accomplishments - I enjoy every part of the
            journey and the community.
          </div>
        </div>
        <div className={Styles.profile}>
          <img src={profile} alt="profile" className={Styles.profileimg} />
        </div>
      </div>

      {/* Connections Container */}
      <div className={Styles.connect}>Connect with me on...</div>
      <div className={Styles.connections}>
        <div className={Styles.linkContainer}>
          <a
            href="https://www.linkedin.com/in/rupam-samanta-509543269/"
            className={Styles.iconLink}
          >
            <img src={linkedin} alt="LinkedIN" />
          </a>
          <a href="https://github.com/Ronin-04" class="nav-link about">
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/s0ul._.rupam/"
            class="nav-link projects"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://x.com/Rupam_Sam2004" class="nav-link connect">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      {/* About and TechStack Container */}
      {/* <div className={Styles.aboutContainer}>hi</div> */}
      <footer className={Styles.footer}></footer>
    </>
  );
};
export default LandingPage;
