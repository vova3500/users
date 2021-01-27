import React from "react";
import {Route, Switch} from "react-router-dom";

import Users from "./Users/Users";
import EditUsers from "./EditUsers/EditUsers";


import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import NotFound from "./NotFound/NotFound";

const useStyles = makeStyles({
    root: {
        width: "90%",
    },

});

const Pages = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Switch>
                <Route exact path={"/"} render={() =><Users />} />
                <Route path={"/edit/:id"} render={() => <EditUsers />}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    )
}

export default Pages