import "./header.css";
import { useSelector } from "react-redux";

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
  const cartList = useSelector((state: any)=> state?.cartList)
  return (
    <div className="hrs">
      <SearchBox />
      <div>
      <img src="/wishlist.png" />
      </div>
      <div>
      <img src="/cart.png" />
      {cartList?.length || ""}
      </div>
     
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
