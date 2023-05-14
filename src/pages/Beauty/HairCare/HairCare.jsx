import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
const HairCare = () => {
  const clothes = useSelector((state) => state.hairCare);
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
export default HairCare;
