import "./User.css";
import logo from "./../assets/ekspektasi.jpeg";
import github from "./../assets/github.svg";
import linkedin from "./../assets/linkedin.svg";
import instagram from "./../assets/instagram.svg";
import youtube from "./../assets/youtube.svg";

const User = () => {
  return (
    <section class="user">
      <img src={logo} alt="" className="user-img" />
      <h2>Pahrurozi</h2>
      <div class="s-media">
        <ul>
          <li>
            <img src={github} alt="" />
          </li>
          <li>
            <img src={youtube} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
        </ul>
      </div>
      <div class="hr"></div>
    </section>
  );
};

export default User;
