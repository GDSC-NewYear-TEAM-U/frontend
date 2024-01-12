import { atom } from "recoil";

export const goodsData = atom({
  key: "goodsName",
  default: {
    goodsType: "",
    info: "",
    image: "",
  },
});

export const LoginData = atom({
  key: "loginData",
  default: "",
});
