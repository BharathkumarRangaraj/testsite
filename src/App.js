import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./const";

function App() {
  const [data, setdata] = useState([]);
  console.log(data);
  const [refresh, setrefresh] = useState(true);
  //sideEffect
  useEffect(() => {
    getapi();
  }, [refresh]);
  //API fetch using Axios
  async function getapi() {
    const responce = await axios.get(API);
    console.log(responce, "re");
    setdata(responce.data.results);
  }
  //early returns
  if (!data[0]) return null;
  //Destructuring
  const { name, email } = data[0];
  const { title, first, last } = name;
  const fullname = title + " " + first + " " + last;
  function handlechange() {
    setrefresh(!refresh);
  }

  if (!(name || email || fullname)) return null;

  return (
    <div className="App">
      <h1>{fullname}</h1>
      <h4>{email}</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={handlechange}>Refresh</button>
      </form>
    </div>
  );
}

export default App;
