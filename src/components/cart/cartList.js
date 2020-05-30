import React from "react";
import CartItems from "./cartItems";

class CartList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 5 },
        { id: 4, count: 1 }
      ]
    };
  }

  handleIncrement = item => {
    const updatedItems = this.state.items;
    const index = updatedItems.indexOf(item);
    updatedItems[index].count++;
    this.setState({ items: updatedItems });
  };

  handleDelete = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  };

  displayItems = () => {
    if (this.state.items.length > 0) {
      return (
        <React.Fragment>
          <h1>Cart Items</h1>
          {this.state.items.map(item => (
            <CartItems
              key={item.id}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              item={item}
            />
          ))}
          <button onClick={() => this.props.history.push("/home")}>
            Back to Home
          </button>
        </React.Fragment>
      );
    } else {
      return <p>No items in the cart !</p>;
    }
  };
  render() {
    return <div className="align-center cart-items">{this.displayItems()}</div>;
  }
}

export default CartList;
