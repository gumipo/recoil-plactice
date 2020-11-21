import { selector } from "recoil";

import { userNamesList } from "../index";
import api from "../../../services/api";

//textStateを取得
export const charCountState = selector({
  key: "charCountState",
  get: async ({ get }) => {
    const _userNamesList = get(userNamesList);

    const responses = await Promise.all(
      _userNamesList.map((userName) => api.get(`/users/${userName}`))
    );

    const followersMap = {};

    responses.forEach((response) => {
      const { data: user } = response;

      followersMap[user.login] = user.followers;
    });
  },
});
