import React from "react";
import "../Form/category.css";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <div className="mb-3 flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="category btn ml-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
