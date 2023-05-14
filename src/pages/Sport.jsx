import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Card";
import { Link } from "react-router-dom";
const Sport = () => {
  const clothes = useSelector((state) => state.sport);
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
export default Sport;
