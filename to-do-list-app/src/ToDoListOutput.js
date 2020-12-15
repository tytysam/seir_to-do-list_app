import React, { useState } from "react";

const ToDoListOutput = ({ toDoItems, completeToDoItem }) => {
  return (
    <div>
      <hr></hr>
      <h3>To Do Items:</h3>
      <ul>
        {toDoItems.map((item, index) => {
          if (item.completed === false) {
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
