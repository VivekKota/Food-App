import react from "react";
import ReactDom from "react-dom/client";
import logo from "./assets/images/Logo.jpg";
import data from "./data.json";

const Logo = () => {
  return (
    <a href="/">
      <img alt="Food Villa" src={logo} className="logo"></img>
    </a>
  );
};

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

const RestaurantCard = ({ item }) => {
  return (
    <div className="RestaurantCard">
      <img src={item?.heroImgUrl}></img>
      <h3>{item?.name}</h3>
      <h4>{item?.establishmentTypeAndCuisineTags.join(", ")}</h4>
      <h4>{item?.averageRating} Rating</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurantList">
      {data.data.data.map((item) => (
        <RestaurantCard item={item} key={item.locationId} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h1>Footer</h1>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
