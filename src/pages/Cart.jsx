import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/cart/CartSlice";
import { toast } from "react-toastify";

import { Button, Table } from "antd";

const Cart = () => {
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(actions.removeInCart(id));

    toast.warn("Product successfully deleted");
  };

  const tableColumn = [
    {
      title: "Image",
      dataIndex: "img",
      render: (url) => <img src={url} width={80} />,
    },
    {
      title: "Quantity",
      dataIndex: "count",
      render: (count) => <p>x {count}</p>,
    },
    {
      title: "name",
      dataIndex: "title",
    },

    {
      title: "Price",
      dataIndex: "price",
      render: (price, record) => (
        <b>
          <p>{price * record.count}$</p>{" "}
        </b>
      ),
    },
    {
      title: "Action",

      render: (record) => (
        <Button onClick={() => deleteItem(record.id)} danger>
          Delete
        </Button>
      ),
    },
  ];

  const cart = useSelector((state) => state.cart.cartShop);
  const allTotal = cart?.reduce((total, item) => {
    return (total += item.price * item.count);
  }, 0);

  return (
    <div>
      <Table
        className="table"
        footer={() => {
          return (
            <div style={{ textAlign: "right", paddingRight: "350px" }}>
              <h5>TOTAL: {allTotal || 0} $ </h5>
            </div>
          );
        }}
        dataSource={cart}
        columns={tableColumn}
      />
    </div>
  );
};

export default Cart;
