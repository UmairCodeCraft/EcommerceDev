// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Cart";
import store from "./Components/Redux/store";
import ProductSinglePage from "./Components/Pages/ProductSinglePage";
import CheckOut from "./Components/Pages/CheckOut";
function App() {
  store.subscribe(() => console.log(store.getState()));
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/Product/:id" element={<ProductSinglePage />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
