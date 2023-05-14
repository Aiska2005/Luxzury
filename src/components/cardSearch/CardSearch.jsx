import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../pages/Card";

const CardSearch = () => {
  const srchNewCards = useSelector((st) => st.search.item2);

  return (
    <div className="searchPages">
      {srchNewCards.map((el) => {
        return <Cards item={el} />;
      })}
    </div>
  );
};

export default CardSearch;
