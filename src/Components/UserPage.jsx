import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userNamesList } from "../atoms/users";
import UsersList from "./UsersList";

const UserInput = () => {
  const [input, setInput] = useState("");
  const [userNames, setUserNames] = useRecoilState(userNamesList);

  const handleInputChange = (e) => {
    //trim: 空白削除　toLowerCase:小文字に変換
    setInput(e.target.value.trim());
  };

  const submit = () => {
    setUserNames([...userNames, input]);
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
      <React.Suspense fallback={<h1>Loding...</h1>}>
        <UsersList />
      </React.Suspense>
    </div>
  );
};

export default UserPage;
