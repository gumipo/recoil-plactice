import React from "react";
import { useRecoilState } from "recoil";

import { userNamesList } from "../atoms/users/index";

// const TextInput = () => {
//   const [text, setText] = useRecoilState(textState);

//   const onChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={onChange} />
//       <br />
//       Echo:{text}
//     </div>
//   );
// };

const UsersList = () => {
  const [userNames, setUserNames] = useRecoilState(userNamesList);
  return (
    <ul>
      {userNames.map((userName) => (
        <li key={userName}>userName</li>
      ))}
    </ul>
  );
};

export default UsersList;
