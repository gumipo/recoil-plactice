import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms";
import CharacterCount from "./CharaterCount";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:{text}
    </div>
  );
};

const CaracterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CaracterCounter;
