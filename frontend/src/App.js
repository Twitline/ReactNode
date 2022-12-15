import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
function App() {

  const [items, setItems] = useState([]);

  const listItems = items.map((item) => <li key={item._id}>{item.libelle}</li>);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:3000/");
      res
          .json()
          .then(res => setItems(res))
      return res;
    }
    fetchData().then(e => console.log(e))
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>La TodoList</h1>
        {listItems}
        <h1>Ajouter un truc à la TodoList</h1>
        <form method="post" action="http://127.0.0.1:3000/">
          <div>
            <label>Libelle</label>
            <input type="text" name="libelle" value={items.libelle}></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;