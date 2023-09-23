import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  const myArray = { name: "Harshit" };
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar userName="ReactTutorials" myArray={myArray} />
      <h1 className="bg-green-400 text-black p-4 rounded-xl">TailWind Test</h1>
    </>
  );
}

export default App;
