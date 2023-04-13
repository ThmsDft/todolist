import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const { list } = useContext(AppContext);

  return (
    <div className="App">
      <Logo />

      <Form />

      <List list={list}/>

      <p>
        Votre Todo List contient {list.length} élément{list.length > 1 && "s"}
      </p>
    </div>
  );
}

export default App;
