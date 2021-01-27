import React from "react";
import {useSelector} from "react-redux";
import { Route } from "react-router-dom";

import Users from "./Users/Users";
import EditUsers from "./EditUsers/EditUsers";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        width: "90%",
    },

});

const Pages = () => {
    const classes = useStyles();

    const users = useSelector(({users}) => users.items)
    const activeUser  = useSelector(({users}) => users.activeUser)

    // const  editUser = users ? users.filter((user) => user.id === selectionUser) : null

    return (
        <Container className={classes.root}>
            <Route exact path={"/"} render={() => <Users users={users}/>} />
            <Route path={"/edit"} render={() => <EditUsers {...activeUser} />}/>
        </Container>
    )
}

export default Pages