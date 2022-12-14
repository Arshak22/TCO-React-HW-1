import React from "react";
import FirstComponent from './Components/First-component';
import { Handler } from "./Components/Handler";
import './index.css';
import FirstPic from './assets/images/2.jpg';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      <Handler text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nostrum aliquid iure ipsa eum dolorem sint repellendus assumenda illo" image={FirstPic}/>,
      <Handler />
    </div>
  );
}

export default App;