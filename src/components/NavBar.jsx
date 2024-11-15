import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/buyurtmalar" activeClassName="active">
            Buyurtmalar
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
