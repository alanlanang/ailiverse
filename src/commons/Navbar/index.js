import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/home_app_ic.svg";
import Notification from "../../assets/notification_ic.svg";
import PhotoCard from "../PhotoCard";
import Search from "../Search";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navNavigationContainer">
      <div className="flex items-center flex-none text-fontPrimary mr-3">
        <img className="pr-4 text-white" alt="logo" src={Logo} />
        <div className="search">
          <Search
            className="search"
            delay={300}
            iconPosition="left"
            iconColor="#ffffff"
            placeholder="Search..."
            onSearchDelay={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-row flex-1">
        <div className="navLinkMenu">
          <button className={`items-center text-center`}>
            <Link to="/">
              <div className="flex py-3 px-2 rounded button-ripple">
                <p>Projects</p>
              </div>
            </Link>
          </button>
          <span
            style={{ width: "55px" }}
            className={`border-opacity-0 ml-1 --isBorderActive`}
          ></span>
        </div>
        <div className="navLinkMenu">
          <button className={`items-center text-center`}>
            <Link to="/">
              <div className="flex py-3 px-2 rounded button-ripple">
                <p>Dashborad</p>
              </div>
            </Link>
          </button>
        </div>
        <div className="navLinkMenu">
          <button className={`items-center text-center`}>
            <Link to="/">
              <div className="flex py-3 px-2 rounded button-ripple">
                <p>Domain</p>
              </div>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-none flex flex-row flex-wrap nav-icons">
        <div className="flex flex-row items-center">
          <img className="pr-4 text-white" alt="logo" src={Notification} />
        </div>
        <div className="flex flex-row items-center">
          <PhotoCard name="User A" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
