import React from "react";
import { RecoilRoot } from "recoil";
import CaracterCounter from "./Components/CharacterCounter";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <h1>App</h1>
        <Router />
      </RecoilRoot>
    </div>
  );
};

export default App;
