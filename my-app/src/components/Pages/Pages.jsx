import React from "react";
import { Route } from "react-router-dom";

import Users from "./Users/Users";

import "./pages.css"

const Pages = () => {

    return (
        <div className="pages">
            <Route exact path={"/"} component={Users} />
            {/*<Route exact path={"/edit"} component={Users} />*/}
        </div>
    )
}

export default Pages