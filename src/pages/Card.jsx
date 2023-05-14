import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { actions } from "../redux/cart/CartSlice";

const Cards = ({ item }) => {
  const dispatch = useDispatch();

  const getShops = () => {
    toast.success("item added to cart");

    console.log(dispatch(actions.getCartShop(item)));
  };

  return (
    <div className="cards">
      <Card
        hoverable
        style={{
          marginTop: "20px",
          width: 260,
          position: "relative",
          background: "#0a8077",
        }}
        cover={<img alt="example" src={item.img} style={{ padding: "10px" }} />}
      >
        <HeartTwoTone
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: 24,
          }}
          twoToneColor="#eb2f96"
        />
        <div className="boxBtnTwo">
          <Card.Meta title={item.title} />
          <button onClick={getShops} className="btnOne">
            {item.price} $
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
