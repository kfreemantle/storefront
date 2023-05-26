import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Storefront from "./Components/Storefront";

function App() {
  return (
    <>
      <Header />
      <Storefront>
        <Categories />
        <Products />
      </Storefront>
      <Footer />
    </>
  );
}

export default App;
