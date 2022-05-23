import { useState } from "react";
import bluImage from "../assets/blu.jpg";
import neroImage from "../assets/nero.jpg";
import verdeImage from "../assets/verde.jpg";
import verdeButton from "../assets/verde-bottone.png";
import neroButton from "../assets/nero-bottone.png";
import bluButton from "../assets/blu-bottone.png";

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

const getButtonFromAsset = {
  [ASSETS.BLU]: bluButton,
  [ASSETS.NERO]: neroButton,
  [ASSETS.VERDE]: verdeButton,
};

function App() {
  const [color, setColor] = useState(ASSETS.BLU);

  return (
    <div className="App">
      <body>
        <div className="buttons">
          {Object.values(ASSETS).map((asset) => (
            <button onClick={() => setColor(asset)}>
              {asset}{" "}
              <img src={getButtonFromAsset[asset]} alt={`button ${asset}`} />
            </button>
          ))}
        </div>
        <div className="main-image">
          <img src={getAssetFromColor[color]} alt={color} />
        </div>
      </body>
    </div>
  );
}

export default App;
