import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/search.css";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({
        ...values,
        results: data,
        keyword: "",
        temp: values.keyword,
      });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="search">
      <div class="box">
        <form onSubmit={handleSubmit}>
          <input
            class="hehehe"
            placeholder=" "
            spellCheck="false"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
