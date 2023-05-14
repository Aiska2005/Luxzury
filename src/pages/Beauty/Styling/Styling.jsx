import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
const Styling = () => {
  const clothes = useSelector((state) => state.styling);
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
export default Styling;
