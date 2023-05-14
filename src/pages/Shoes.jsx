import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

const Shoes = () => {
  const shoes = useSelector((state) => state.shoesItem);
  return (
    <>
      <div className="blockGlav">
        <h3 className="glav">
          <Link to="/">Главная</Link>
        </h3>
      </div>
      <div className="cards">
        {shoes.map((item) => {
          return (
            <div key={item.id}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shoes;
