import React, { useState } from "react";
import "../css/searchForm.scss";
import ListComponents from "./ListComponents";
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

  return (
    <>
      <div id="inputContainer">
        <input
          name="inputValue"
          onChange={onChange}
          value={inputValue}
          autoFocus
        />
      </div>
      <div id="questListContainer">
        {questList.map((item) => {
          const { question, select } = item;
          const temp = select.concat(question);
          item.visible = false;
          console.log(item);
          return (
            temp.map(
              (sel) =>
                (item.visible =
                  sel.indexOf(inputValue) !== -1 ? true : item.visible)
            ),
            (<ListComponents item={item} />)
          );
          //   return <ListComponents item={item} />;
        })}
      </div>
    </>
  );
}

export default SearchForm;
