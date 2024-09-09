import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [isInputValid, setInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    setinputText(event.target.value);
    if (event.target.value.trim().length === 0) return;
    setInputValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.length === 0) return setInputValid(false);
    props.onAddTask(inputText);
    setinputText("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label
          style={{
            color: isInputValid ? "black" : "red",
          }}
        >
          Задачи
        </label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
          style={{
            backgroundColor: isInputValid ? "transparent" : "#f7003e",
          }}
          value={inputText}
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
