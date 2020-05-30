import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

import "./App.css";
import EditUser from "./components/editUser";
import CartList from "./components/cart/cartList";
import NewsList from "./components/news/newsList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/editUser" component={EditUser} />
        <Route exact path="/cartList" component={CartList} />
        <Route exact path="/newsList" component={NewsList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
