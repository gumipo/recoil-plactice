import React from "react";
import { RecoilRoot } from "recoil";
import CaracterCounter from "./Components/CharacterCounter";
import Router from "./Router";

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
