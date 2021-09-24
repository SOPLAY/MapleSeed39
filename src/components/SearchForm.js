import React, { useState } from "react";
import "../css/searchForm.scss";
function SearchForm({ questList }) {
  const [input, setInput] = useState({ inputValue: "" });
  const { inputValue } = input;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const setVisible = () => {
    questList.map((item) => {
      let { question, select, visible } = item;
      console.log(
        question,
        "+",
        inputValue,
        "=",
        question.indexOf(inputValue) !== -1 ? "true" : "false"
      );
      return (
        (visible = question.indexOf(inputValue) !== -1 ? true : false),
        console.log(visible)
      );
    });
  };
  setVisible();
  return (
    <div id="inputContainer">
      <input name="inputValue" onChange={onChange} value={inputValue} />
    </div>
  );
}

export default SearchForm;
