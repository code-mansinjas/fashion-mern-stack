import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className={`header-outer border-bottom-grey`}>
     <div className="header" >
     <Logo />
      <Menu />
      <HeaderRightSection />
     </div>
    </header>
  );
};

const Logo = ({}) => {
  return <div className="logo">Sample</div>;
};

const Menu = () => {
  return (
    <ul className={"menus"}>
      <li className="menu">Home</li>
      <li className="menu">Contact</li>
      <li className="menu">About</li>
      <li className="menu">Sign Up</li>
    </ul>
  );
};

const HeaderRightSection = () => {
  return (
    <div className="hrs">
      <SearchBox />
      <img src="/wishlist.png" />
      <img src="/cart.png" />
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className={"search-box"}>
      <input placeholder={"What are you looking for? "} />
      <img src="/search-icon.png" />
    </div>
  );
};
export default Header;
