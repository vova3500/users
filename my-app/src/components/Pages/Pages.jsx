import React from "react";
import { Route } from "react-router-dom";

import Users from "./Users/Users";

const Pages = () => {

    return (
        <div>
            <Route exact path={"/"} component={Users} />
            {/*<Route exact path={"/edit"} component={Users} />*/}
        </div>
    )
}

export default Pages