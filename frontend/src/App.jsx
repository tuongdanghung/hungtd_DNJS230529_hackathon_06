import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [defaultValue, setDefaultValue] = useState(null);
  const [value, setValue] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/notes`).then((response) => {
      setData(response.data.data);
    });
  }, [isCheck]);

  const handleAddNew = () => {
    const content = value;
    if (defaultValue === null) {
      axios
        .post("http://localhost:5000/api/v1/notes", { content })
        .then((response) => {
          setIsCheck(!isCheck);
          alert(response.data.message);
          setValue("");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      axios
        .put(`http://localhost:5000/api/v1/notes/${defaultValue}`, { content })
        .then((response) => {
          setIsCheck(!isCheck);
          setDefaultValue(null);
          setValue("");
          alert(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/notes/${id}`)
      .then((response) => {
        setIsCheck(!isCheck);
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleEdit = (id) => {
    setDefaultValue(id);
    axios
      .get(`http://localhost:5000/api/v1/notes/${id}`)
      .then((response) => {
        setValue(response.data.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <h1>Note app</h1>
      <div className="note">
        <label>Content</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddNew}>submit</button>
      </div>
      <div className="list">
        {data?.map((item, index) => {
          return (
            <div key={index} className="item">
              <p>{item.content}</p>
              <div>
                <button onClick={() => handleEdit(item.id)}>edit</button>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
