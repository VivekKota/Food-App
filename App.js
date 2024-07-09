import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
