import React from "react";
import { Button } from "antd";
const Buttons = (props) => {
  return <Button color={props.color}>{props.type}</Button>;
};

export default Buttons;
