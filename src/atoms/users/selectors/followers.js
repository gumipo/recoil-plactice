import { selector } from "recoil";

import { userNamesList } from "../index";
import api from "../../../services/api";

//textStateを取得
export const userToFollowerMap = selector({
  key: "userToFollowerMap",
  get: async ({ get }) => {
    const _userNamesList = get(userNamesList);

    const responses = await Promise.all(
      _userNamesList.map((userName) => api.get(`/users/${userName}`))
    );

    const followerMap = {};

    responses.forEach((response) => {
      const { data: user } = response;

      followerMap[user.login] = user.followers;
    });
    return followerMap;
  },
});
