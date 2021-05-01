import { CODE_RETURN } from "keycode-js";
import React, { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

type TodoInputProps = {
  addTodo: (item: string) => void;
};

type TodoInputState = {
  name: string;
};

class TodoInput extends React.Component<React.PropsWithChildren<TodoInputProps>, TodoInputState> {
  private inputElement: RefObject<HTMLInputElement>;

  constructor(props: React.PropsWithChildren<TodoInputProps>) {
    super(props);

    this.state = { name: "" };
    this.inputElement = React.createRef<HTMLInputElement>();
  }

  setFocusInput() {
    if (this.inputElement.current) {
      this.inputElement.current.focus();
    }
  }

  verifyInput() {
    this.setFocusInput();
    this.props.addTodo(this.state.name);
    this.setState({
      name: "",
    });
  }

  componentDidMount() {
    this.setFocusInput();
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.verifyInput();
  };

  handleKeydown = (e: KeyboardEvent) => {
    if (e.code === CODE_RETURN) {
      e.preventDefault();
      this.verifyInput();
    }
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
          placeholder="Please set task name"
          onKeyDown={this.handleKeydown}
          value={this.state.name}
          ref={this.inputElement}
          autoFocus
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={this.handleClick}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

// const TodoInput: React.FunctionComponent<{  }> = (props: React.PropsWithChildren<{ addTodo: (item: string) => void }>) => {
//   console.log("todo input");

//   const [name, setName] = useState("");
//   const inputElement = useRef<HTMLInputElement | null>(null);

//   function focusInputElement() {
//     if (inputElement.current) {
//       inputElement.current.focus();
//     }
//   }

//   function verifyInput() {
//     focusInputElement();
//     if (name.length === 0) {
//       Swal.fire("Oops...", "Task name cannot be empty!", "error").then(() => {});
//     } else {
//       props.addTodo(name);
//       setName("");
//     }
//   }

//   useEffect(() => {
//     focusInputElement();
//     return () => {};
//   }, []);

//   function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     verifyInput();
//   }

//   function handleKeydown(e: KeyboardEvent) {
//     if (e.code === CODE_RETURN) {
//       e.preventDefault();
//       verifyInput();
//     }
//   }

//   return (
//     <div className="input-group">
//       <input
//         type="text"
//         className="form-control"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//         placeholder="Please set task name"
//         onKeyDown={handleKeydown}
//         value={name}
//         ref={inputElement}
//         autoFocus
//       />
//       <div className="input-group-append">
//         <button className="btn btn-primary" type="button" onClick={handleClick}>
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

export default TodoInput;
