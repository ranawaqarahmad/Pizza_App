import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature
        heading="Pizza of the Day"
        text="Truffle Alfredo Sauce Topped with 24 carat gold Dust."
        buttonText="Order Now"
      />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </Router>
  );
};

export default App;
