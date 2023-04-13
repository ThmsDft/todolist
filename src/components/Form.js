import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Form() {
  const [input, setInput] = useState("");
  const { handleAdd, setNewItem, newItem, handleUpdate } =
    useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    newItem ? handleUpdate(newItem) : handleAdd(input);
    setNewItem(null);
    setInput("");
  };

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  }, [newItem])

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Todo..."
        type="text"
        value={newItem ? newItem.name : input}
        onChange={(e) =>
          newItem
            ? setNewItem({ ...newItem, name: e.target.value })
            : setInput(e.target.value)
        }
        ref={inputRef}
      />
      <button>
        {newItem ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="editForm"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        )}
      </button>
    </form>
  );
}

export default Form;
