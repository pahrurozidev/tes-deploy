import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const [Menu, setMenu] = useState(true);
  const slide = () => {
    setNav((visible) => !visible);
  };
  return (
    <div>
      <nav className={Nav ? "slide" : ""}>
        <ul>
          <li>
            <a href="/" class="a-class">
              <div class="box box-hide">
                <p>Home</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/about" class="a-class">
              <div class="box box-hide">
                <p>About</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="a-class">
              <div class="box box-hide">
                <p>Blog</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/contact" class="a-class">
              <div class="box box-hide">
                <p>Contact</p>
              </div>
            </a>
          </li>
        </ul>

        <div class="toggle" onClick={() => slide()}>
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
        </div>

        <div class="copyright">
          <p>Copyright@2021 Pahrurozi</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
