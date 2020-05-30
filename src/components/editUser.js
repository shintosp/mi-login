import React from "react";
import { withRouter } from "react-router-dom";

class EditUser extends React.Component {
  constructor() {
    super();
    // this.nameRef = React.createRef();
    // this.cityRef = React.createRef();
    // this.stateRef = React.createRef();

    this.state = {
      userName: "",
      city: "Bangalore",
      state: "Karnataka"
    };
  }
  componentDidMount() {
    if (this.state.userName == "") {
      this.setState({
        userName: sessionStorage.getItem("userName")
      });
    }
  }
  updateOnsubmit = e => {
    e.preventDefault();
    if (sessionStorage.getItem("userName") != this.state.userName)
      sessionStorage.setItem("userName", this.state.userName);
    alert("User profile is updated");
    console.log(this.state);
  };
  render() {
    return (
      <div className="align-center">
        <h1>Update following fields</h1>
        <form>
          <input
            placeholder={this.state.userName}
            onChange={e => this.setState({ userName: e.target.value })}
          />
          <input
            placeholder={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
          <input
            placeholder={this.state.state}
            onChange={e => this.setState({ state: e.target.value })}
          />
          <button onClick={this.updateOnsubmit}>Update</button>
          <button onClick={() => this.props.history.push("/home")}>
            Back to Home
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditUser);
