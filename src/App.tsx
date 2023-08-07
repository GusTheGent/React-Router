import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home/Home";
import About from "components/About/About";
import NavBar from "components/Navbar/Navbar";
import OrderSummary from "components/Order-Summary/Order-Summary";
import NotFound from "components/Not-Found/Not-Found";
import Products from "components/Products/Products";
import Featured from "components/Products/components/Featured/Featured";
import New from "components/Products/components/New/New";
import Users from "components/Users/Users";
import UserDetails from "components/Users/UserDetails/UserDetails";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
