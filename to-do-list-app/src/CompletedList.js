import React from "react";

const CompletedList = ({ completedList, removeFromList }) => {
  return (
    <div>
      <h3>Completed:</h3>
      <ul>
        {completedList.map((item, index) => {
          if (item.completed === true) {
            return (
              <li>
                <p>{item.title}</p>
                <button onClick={() => removeFromList(index)}>Remove</button>
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
