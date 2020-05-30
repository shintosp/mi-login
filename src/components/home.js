import React from "react";
import { withRouter, Link } from "react-router-dom";

const Home = () => (
  <div className="align-center menu">
    <h1>Menu</h1>
    <ul>
      <li>
        <Link to="/editUser">Update User</Link>
      </li>
      <li>
        <Link to="/cartList">Shopping Cart</Link>
      </li>
      <li>
        <Link to="/newsList">News</Link>
      </li>
    </ul>
  </div>
);

export default Home;
