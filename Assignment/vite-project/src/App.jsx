
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const addData = async () => {
    try {
      const id = data.length + 1;

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setData([...data, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = () => {
    setData(data.slice(0, -1));
  };

  return (
    <div className="app">
      <h1>Assignment</h1>

      <div className="frame">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="add-btn" onClick={addData}>
          Add
        </button>

        <button className="delete-btn" onClick={deleteData}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
