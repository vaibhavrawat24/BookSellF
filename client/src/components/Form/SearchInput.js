import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/search.css";
import { SearchOutlined } from "@ant-design/icons";
// import { Button, Tooltip, Space } from "antd";
import { Input } from "antd";

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
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        {/* <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        /> */}
        {/* <Button
          icon={<SearchOutlined />}
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        >
          Search
        </Button> */}
        <Input
          style={{ height: "30px", marginTop: "6px", marginRight: "15px" }}
          prefix={<SearchOutlined />} // Use the icon as a prefix
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
      </form>
    </div>
  );
};

export default SearchInput;
