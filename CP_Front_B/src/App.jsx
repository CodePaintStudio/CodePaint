import PageContainer from "./components/PageContainer.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {initUserInfo, changeLoginStatus} from "./store/userSlice.js";
import {loginServer} from "./api/user.js";

export default function App() {

    const isLogin = useSelector(state => state.user.isLogin);
    const dispatch = useDispatch();

    useEffect(() => {
        async function checkLoginStatus() {
            const res = await loginServer({
                username: localInfo.username,
                password: localInfo.password,
            })
            dispatch(changeLoginStatus(true));
            dispatch(initUserInfo(res.data));
        }

        const localInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (localInfo) {
            checkLoginStatus()
        }

    }, [])

    return (
        <>
            {isLogin ? <PageContainer/> : <LoginPage/>}
        </>
    )
}
