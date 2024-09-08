import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

/**
 * 创建切片
 */
export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogin: false,
        userInfo: []
    },
    reducers: {
        changeLoginStatus: (state, {payload}) => {
            state.isLogin = payload;
        },
        initUserInfo: (state, {payload}) => {
            state.userInfo = payload;
        },
        updateStoreUserInfo: (state, {payload}) => {
            for (let key in payload) {
                state.userInfo[key] = payload[key];
            }
        },
        clearUserInfo: (state, {payload}) => {
            state.userInfo = [];
        }
    }
})


export const {changeLoginStatus, initUserInfo, updateStoreUserInfo, clearUserInfo} = userSlice.actions;

export default userSlice.reducer