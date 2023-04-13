const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todoList"))
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const [newItem, setNewItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const handleAdd = (item) => {
    if (item.trim() === "") return;
    const id = new Date().getTime();
    setList([...list, { name: item, id, checked: false }]);
  };

  const handleDelete = (id) => {
    setList([...list].filter((item) => item.id !== id));
  };

  const handleChecked = (id) => {
    setList(
      [...list].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleUpdate = (newItem) => {
    setList(
      [...list].map((item) =>
        item.id === newItem.id ? { ...item, name: newItem.name } : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        handleAdd,
        handleDelete,
        handleChecked,
        setNewItem,
        newItem,
        handleUpdate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
