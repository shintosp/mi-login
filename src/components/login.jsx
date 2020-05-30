import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Home from "./home";

class Login extends Component {
  constructor() {
    super();
    // this.nameRef = React.createRef();
    // this.passRef = React.createRef();
    this.state = {
      userName: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    sessionStorage.setItem("userName", this.state.userName);
    sessionStorage.setItem("password", this.state.password);
    alert(
      "No restictions anybody can login!!, username and password are saved"
    );
    this.props.history.push("/home");
    //return <Redirect to="/users" />
  };

  render() {
    return (
      <div className="align-center">
        <form>
          <h1>Login</h1>
          <input name="userName" type="text" onChange={this.handleInput} />
          <input name="password" type="password" onChange={this.handleInput} />
          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
