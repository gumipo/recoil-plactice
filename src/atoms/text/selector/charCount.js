import { selector } from "recoil";

import { textState } from "../../index";

//textStateを取得
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
