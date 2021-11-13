import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import User from "./components/user/User";

// "homepage": "https://pahrurozidev.github.io/my-p",
// "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <User />
          <Home />
        </Route>
        <Route path="/about">
          <Navbar />
          <User />
          <About />
        </Route>
        <Route path="/contact">
          <Navbar />
          <User />
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
