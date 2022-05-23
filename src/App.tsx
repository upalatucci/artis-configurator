import { useState } from "react";
import bluImage from "../assets/blu.jpg";
import neroImage from "../assets/nero.jpg";
import verdeImage from "../assets/verde.jpg";

enum ASSETS {
  BLU = "blu",
  NERO = "nero",
  VERDE = "verde",
}

const getAssetFromColor = {
  [ASSETS.BLU]: bluImage,
  [ASSETS.NERO]: neroImage,
  [ASSETS.VERDE]: verdeImage,
};

function App() {
  const [color, setColor] = useState(ASSETS.BLU);

  return (
    <div className="App">
      <body>
        <div className="buttons">
          {Object.values(ASSETS).map((asset) => (
            <button onClick={() => setColor(asset)}>{asset}</button>
          ))}
        </div>
        <img src={getAssetFromColor[color]} alt={color} />
      </body>
    </div>
  );
}

export default App;
