import "../StyleSheets/NavBar.css";
import tick from "../Assets/tick.png";
const NavBar = () => {
  return (
    <div className="header">
      <nav>
        <img src={tick} alt="" className="logo" />
        <ul className="navegation">
          <li className="itens">
            <a href="https://ticktick.com/about/download" className="nav-download" target="blank"><button className="down">Download</button></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
