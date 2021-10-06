import classNames from "classnames";
import React from "react";
import "../css/questList.scss";

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
