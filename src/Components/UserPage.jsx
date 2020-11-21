import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userNamesList } from "../atoms/users";
import UsersList from "./UsersList";

const UserInput = () => {
  const [input, setInput] = useState("");
  const [setUserNames] = useRecoilState(userNamesList);

  const handleInputChange = (e) => {
    //trim: 空白削除　toLowerCase:小文字に変換
    setInput(e.target.value.trim());
  };

  const submit = () => {
    setUserNames(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={submit}>add GitHub User</button>
    </div>
  );
};

const UserPage = () => {
  return (
    <div>
      <UserInput />
      <UsersList />
    </div>
  );
};

export default UserPage;
