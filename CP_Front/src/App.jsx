import RouteConfig from './router/index.jsx'
import {NavLink} from "react-router-dom";

export default function App() {

    return (
        <>
            <NavLink to="/notfound">
                <h1>NotFound</h1>
            </NavLink>
            <NavLink to="/havefound">
                <h1>HaveFound</h1>
            </NavLink>
            <RouteConfig></RouteConfig>
        </>
    )
}
