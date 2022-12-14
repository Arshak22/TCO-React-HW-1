import React, { useState } from "react";
import FirstComponent from './Components/First-component';
import { Handler } from "./Components/Handler";
import './index.css';
import {Life} from "./Components/lifecycle";
import FirstPic from './assets/images/2.jpg';

function App() {
  const[flag, setFlag] = useState(true);

  const ChangeFlag = () => {
    setFlag(!flag);
  }

  return (
    <div className="App">
      {/* <FirstComponent />, */}
      {/* <Handler text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nostrum aliquid iure ipsa eum dolorem sint repellendus assumenda illo" image={FirstPic}/>,
      <Handler /> */}
      <button onClick={ChangeFlag}>Change</button>
      {flag? <Life />: null}
    </div>
  );
}

export default App;