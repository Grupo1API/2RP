import React from "react";
import { NavLink, Link } from "react-router-dom";

export const AuthMenu = () => {
    return (
      <NavLink to="/home">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </NavLink>
    );
  };

  export default AuthMenu  