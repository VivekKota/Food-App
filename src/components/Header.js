import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
