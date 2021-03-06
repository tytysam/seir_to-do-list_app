import React from "react";

const CompletedList = ({ completedList, removeFromList }) => {
  return (
    <div className="completed-list-container">
      <hr></hr>
      <h3>Completed:</h3>
      <ul>
        {completedList.map((item, index) => {
          if (item.completed === true && item.title) {
            return (
              <li className="strikethrough">
                <p onClick={() => removeFromList(index)}>{item.title}</p>
              </li>
            );
          } else {
            return;
          }
        })}
      </ul>
    </div>
  );
};

export default CompletedList;
