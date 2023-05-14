import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Card";
const Face = () => {
  const clothes = useSelector((state) => state.face);
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
export default Face;
