import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { request } from "@/utils/request";
import { getToken, setToken as _setToken } from "@/utils";

interface LoginForm {
  username: string;
  password: string;
}

interface UserState {
  token: string;
}

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
  } as UserState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      //将token保存到本地
      _setToken(action.payload);
    },
  },
});

//异步方法 完成登录获取token
const fetchLogin = (loginForm: LoginForm) => {
  return async (dispatch: any) => {
    const res = await request.post<{ token: string }>(
      "/authorizations",
      loginForm
    );
    dispatch(setToken(res.token));
  };
};

const { setToken } = userStore.actions;

export { fetchLogin, setToken };

export default userStore.reducer;
