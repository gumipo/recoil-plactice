import React from "react";
import { RecoilRoot } from "recoil";
import CaracterCounter from "./Components/CharacterCounter";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <h1>App</h1>
        <CaracterCounter />
      </RecoilRoot>
    </div>
  );
};

export default App;
