import classNames from "classnames";
import React from "react";
import "../css/questList.scss";
import SearchForm from "./SearchForm";
// "seed39": [
//     {
//       "questNo": 1,
//       "question": "골드비치 리조트에 거주하는 잡화 상인 이름은? ",
//       "select": ["프레드릭 ", "나탈리 ", "메이슨 ", "베티 "],
//       "answer": 3,
//       "visible": true
//     },

function ListComponents({ item }) {
  const { question, select, answer, visible } = item;
  return (
    <>
      <div
        className={classNames(
          "questListDiv",
          visible === true ? "visible" : "unvisible"
        )}
      >
        <ul className={classNames("questList")}>
          <li className="question">{question}</li>
          {select.map((sel, selIndex) => {
            return (
              <li
                key={selIndex}
                className={classNames(
                  "answerList",
                  answer === selIndex + 1 ? "answer" : ""
                )}
              >
                {sel}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListComponents;
