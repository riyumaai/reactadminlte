import { CODE_RETURN } from "keycode-js";
import React, { KeyboardEvent, useState } from "react";
import Swal from "sweetalert2";

const TodoInput: React.FunctionComponent<{ addTodo: (item: string) => void }> = (props: React.PropsWithChildren<{ addTodo: (item: string) => void }>) => {
  const [name, setName] = useState("");
  const [input, setInput] = useState<HTMLInputElement | null>(null);

  function verifyInput() {
    if (name.length === 0) {
      Swal.fire("Oops...", "Task name cannot be empty!", "error").then(() => {
        
      });
    } else {
      props.addTodo(name);
      setName("");
      if (input) {
        input.focus();
      }
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (input) {
      input.focus();
    }
    verifyInput();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.code === CODE_RETURN) {
      e.preventDefault();
      verifyInput();
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
        placeholder="Please set task name"
        onKeyDown={handleKeydown}
        value={name}
        ref={(element) => {
          setInput(element);
        }}
        autoFocus
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
