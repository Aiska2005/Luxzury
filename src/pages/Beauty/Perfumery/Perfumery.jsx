import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
const Perfumery = () => {
  const clothes = useSelector((state) => state.perfumery);
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
export default Perfumery;
