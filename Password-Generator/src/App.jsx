import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  //tackle the length
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef use
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (character) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      //for the index value
      let char = Math.floor(Math.random() * str.length + 1);
      //value corresponding to the string value
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, character, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
    alert("Value copied to clipboard");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, character, passwordGenerator]);

  return (
    <>
      <div
        className=" w-full max-w-md shadow-md px-10 my-8  text-black bg-orange-300 "
        style={{
          justifyContent: "center",
          marginLeft: "25%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="text-black text-center my-5 ">Password Generator</h1>
        <div className="flex shadow overflow-hidden mb-4 mt-2 rounded-lg outline">
          <input
            type="text"
            value={password}
            className="outline-none w-full"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="px-2 py-1 fill-black bg-blue-500  hover:bg-yellow-500"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length :{length}</label>
        </div>
        <div className="flex item-center gap-x-2  mt-5">
          <input
            type="checkbox"
            value={character}
            onClick={(e) => {
              setCharacter((prev) => !prev);
            }}
          />
          <label>Character </label>
          <input
            type="checkbox"
            value={numberAllowed}
            id="numberInput"
            onClick={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number </label>
        </div>
      </div>
    </>
  );
}

export default App;
