import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
import { Link } from "react-router-dom";
const Body = () => {
  const clothes = useSelector((state) => state.body);
  return (
    <div className="cards">
      {clothes?.map((item) => {
        return (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Body;
