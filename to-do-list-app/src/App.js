import React, { useState } from "react";
import ToDoListOutput from "./ToDoListOutput.js";
import CompletedList from "./CompletedList.js";
import "./App.css";

function App() {
  const toDoListData = [
    {
      title: "Learn more about React",
      completed: true,
    },
    {
      title: "Write a new Component",
      completed: false,
    },
    {
      title: "Add some style",
      completed: false,
    },
  ];

  const [toDoItems, setToDoItems] = useState(toDoListData);

  const [toDoTitle, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const [completedList, updateCompletedList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToDoItem = {
      title: toDoTitle,
      completed: isCompleted,
    };

    setToDoItems([...toDoItems, newToDoItem]);
    setTitle("");
  };

  const completeToDoItem = (index) => {
    const currentItem = toDoItems[index];
    currentItem.completed = true;

    updateCompletedList([...completedList, currentItem]);
  };

  const removeFromList = (index) => {
    updateCompletedList([
      ...completedList.slice(0, index),
      ...completedList.slice(index + 1),
    ]);
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xmh6snq.css" />
        <script
          src="https://kit.fontawesome.com/0f84f97a69.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <div className="App">
          <header className="App-header">
            <div className="to-do-container">
              <h1>My To-Do List</h1>
              <form onSubmit={handleSubmit}>
                <label>New List Item: </label>

                <br />
                <input
                  type="text"
                  id="title"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </form>

              <ToDoListOutput
                toDoItems={toDoItems}
                completeToDoItem={completeToDoItem}
              />
              <CompletedList
                completedList={completedList}
                removeFromList={removeFromList}
              />
            </div>
          </header>
        </div>
      </body>
    </html>
  );
}

export default App;
