import { NavLink } from "react-router-dom";

import HeaderStyled from "./HeaderStyled";
const translations = {
  home: "Inicio",
  login: "Login",
  myRecipes: "Mis recetas",
  newRecipe: "Crear receta",
  logout: "Cerrar sesión",
};

const logOut = () => {
  return;
};

const user = { isLogged: false };

const Header = () => {
  const { home, login, myRecipes, newRecipe, logout } = translations;

  return (
    <HeaderStyled>
      <img
        src="/images/logo.png"
        alt="Logo mahlzeit"
        height={96}
        className="header__logo header__logo--desktop"
      />

      <div className="header__text-container">
        <h1 className="header__title">Mahlzeit</h1>
        <ul className="header__navigation">
          <li>
            <NavLink className="navigation__link" to={"/home"}>
              {home}
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/myreciptes"}>
              {myRecipes}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" to={"/create"}>
              {newRecipe}{" "}
            </NavLink>
          </li>
          <li>
            {!user.isLogged ? (
              <NavLink className="navigation__link" to={"/login"}>
                {login}
              </NavLink>
            ) : (
              <NavLink
                className="navigation__link"
                onClick={logOut}
                to={"/home"}
              >
                {logout}
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
