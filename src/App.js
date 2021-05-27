import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Counter from "./Counter";
import { getData } from "./utils/index";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  console.log(data);
  const handleClick = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Counter count={count} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div className="div">
        {data.map((user) => (
          <h1>{user.name}</h1>
        ))}
      </div>
      <button onClick={handleClick}>counter</button>
    </div>
  );
}

export default App;
