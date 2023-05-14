import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
const Manicure = () => {
  const clothes = useSelector((state) => state.manicure);
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
export default Manicure;
