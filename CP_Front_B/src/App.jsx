import PageContainer from "./components/PageContainer.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {useLayoutEffect} from "react";
import {useSelector} from 'react-redux';

export default function App() {

    const isLogin = useSelector(state => state.user.isLogin);

    useLayoutEffect(() => {

    }, []);

    return (
        <>
            {isLogin ? <PageContainer/> : <LoginPage/>}
        </>
    )
}
