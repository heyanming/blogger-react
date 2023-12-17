import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils/request";
import { getToken, setToken as _setToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      //将token保存到本地
      _setToken(action.payload);
    },
  },
});

//异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return (dispatch) => {
    const res = request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
};

const { setToken } = userStore.actions;

export { fetchLogin, setToken };

export default userStore.reducer;
