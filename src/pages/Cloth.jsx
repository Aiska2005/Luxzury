import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Cards from "./Card";
const Cloth = () => {
  const clothes = useSelector((state) => state.TItem);
  return (
    <>
      <div className="blockGlav">
        <h3 className="glav">
          <Link to="/">Главная</Link>
        </h3>
      </div>

      <div className="cards">
        {clothes.map((item) => {
          return (
            <div key={item.id}>
              <Cards item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cloth;
