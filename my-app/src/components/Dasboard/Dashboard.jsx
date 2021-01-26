import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Switch>
                    <Route path="/edit" children={<Title title="Edit user"/>} />
                    <Route path="/" children={<Title title="Dashboard"/>} />
                </Switch>
            </Toolbar>
        </AppBar>
    )
}

function Title({title}) {
    return (
        <Typography variant="h6" color="inherit">
            {title}
        </Typography>
    )
}

export default Dashboard