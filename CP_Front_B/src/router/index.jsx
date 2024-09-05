import {Route, Routes} from "react-router-dom";

import AddArticles from "../pages/AddArticles.jsx";
import ArticlesCate from "../pages/ArticlesCate.jsx";
import HandleAdd from "../pages/HandleAdd.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import UserPage from "../pages/UserPage.jsx";

export default function RouteConfig() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/articles" element={<ArticlesCate/>}></Route>
            <Route path="/addarticle" element={<AddArticles/>}></Route>
            <Route path="/handleadd" element={<HandleAdd/>}></Route>
            <Route path="/user" element={<UserPage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
        </Routes>
    )
}