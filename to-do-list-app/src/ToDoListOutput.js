import React, { useState } from "react";

const ToDoListOutput = ({ toDoItems, completeToDoItem }) => {
  return (
    <div className="to-be-done-container">
      <hr></hr>
      <h3>Still To Do:</h3>
      <ul>
        {toDoItems.map((item, index) => {
          if (item.completed === false && item.title) {
            return (
              <li>
                <p onClick={() => completeToDoItem(index)}>{item.title}</p>
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

export default ToDoListOutput;
