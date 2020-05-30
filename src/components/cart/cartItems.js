import React from "react";

const CartItems = props => {
  return (
    <div className="each-item">
      <span className="itemNo">item-{props.item.id}</span>
      <span className="item-count">{props.item.count}</span>
      <button
        className="btn-increase"
        onClick={() => props.onIncrement(props.item)}
      >
        Increase count
      </button>
      <button
        className="btn-delete"
        onClick={() => props.onDelete(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItems;
