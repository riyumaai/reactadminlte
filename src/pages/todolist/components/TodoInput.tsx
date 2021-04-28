import { CODE_RETURN } from "keycode-js";
import React, { KeyboardEvent, useState } from "react";

const TodoInput: React.FunctionComponent<{ addTodo: (item: string) => void }> = (props: React.PropsWithChildren<{ addTodo: (item: string) => void }>) => {
  const [name, setName] = useState("");

  function handleClick() {
    props.addTodo(name);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.code === CODE_RETURN) {
      handleClick();
      setName("");
    }
  }

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Please input task"
        onKeyDown={handleKeydown}
        value={name}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
