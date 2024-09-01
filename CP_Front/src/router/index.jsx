import {Route, Routes} from "react-router-dom";

import HaveFound from "../components/HaveFound.jsx";
import NotFound from "../components/NotFound.jsx";

export default function RouteConfig() {
    return (
        <Routes>
            <Route path="/havefound" element={<HaveFound/>}></Route>
            <Route path="/notfound" element={<NotFound/>}></Route>
            <Route path="/" element={<HaveFound/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}