import { useState } from "react";

enum ASSETS {
  BLU = "blu",
  NERO = "nero",
  VERDE = "verde",
}

function App() {
  const [color, setColor] = useState(ASSETS.BLU);

  return (
    <div className="App">
      <body>
        <p>
          {Object.values(ASSETS).map((asset) => (
            <button onClick={() => setColor(asset)}>{asset}</button>
          ))}
        </p>
        <img src={`../assets/${color}.jpg`} alt={color} />
      </body>
    </div>
  );
}

export default App;
