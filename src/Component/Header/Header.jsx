import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-6 px-10 rounded-sm max-w-[1440px] flex justify-between items-center mx-auto bg-[rgb(28,43,53)] ">
      <img src={logo} alt="" />
      <div className=" text-white flex gap-5 ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "hover:text-orange-200"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "hover:text-orange-200"
          }
          to="shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "hover:text-orange-200"
          }
          to="order"
        >
          Order
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "hover:text-orange-200"
          }
          to="login"
        >
          Get In
        </NavLink>
        {user && (
          <span>
            {user.email}
            <button onClick={handleLogOut} className="ml-1">
              log out
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
