import RouteConfig from './router/index.jsx';
import {NavLink} from "react-router-dom";
import * as style from './styles/test.module.css'

export default function App() {

    return (
        <>
            <div className={style.header}>
                <NavLink to="/notfound">
                    <h1>NotFound</h1>
                </NavLink>
                <NavLink to="/havefound">
                    <h1>HaveFound</h1>
                </NavLink>
            </div>
            <div className={style.body}>
                <RouteConfig></RouteConfig>
            </div>
        </>
    )
}
