import React from "react";
import { Input } from "antd";
const { Search } = Input;
import { actions } from "../../redux/search/SearchSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchCpt = () => {
  const allSlct = useSelector((st) => st.search.item2);
  const dispatch = useDispatch();

  const onChanges = (e) => {
    if (e.target.value) {
      e.preventDefault();
      dispatch(actions.alldannyi(e.target.value));
    } else {
      dispatch(actions.anyBlock());
    }
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        style={{
          width: 200,
        }}
        onChange={onChanges}
      />
    </div>
  );
};

export default SearchCpt;
