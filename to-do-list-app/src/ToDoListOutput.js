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
                <p>{item.title}</p>
                <button onClick={() => completeToDoItem(index)}>
                  Completed
                </button>
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
