import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [visible, setVisible] = useState(3);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setItems(res));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="App">
    <div className="container">
      {items.slice(0, visible).map((item) => {
        return (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>

          </div>
        );
      })}
      <button onClick={showMoreItems}>Show More</button>
      </div>
      </div>
  );
}
