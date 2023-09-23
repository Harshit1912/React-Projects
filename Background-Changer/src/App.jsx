import { useState } from "react";

function App() {
  const [color, setColor] = useState("brown");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-3 py-5">
        <div className="flex flex-wrap justify-center gap-1 shadow-xl bg-white px-2 rounded-3xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 shadow-xl "
          >
            Red
          </button>

          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 shadow-xl "
          >
            Green
          </button>

          <button
            onClick={() => setColor("Aqua")}
            className="outline-none px-4 py-1 shadow-xl "
          >
            Aqua
          </button>

          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 shadow-xl "
          >
            Black
          </button>

          <button
            onClick={() => {
              setColor("Grey");
            }}
            className="outline-none px-4 py-1 shadow-xl "
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
