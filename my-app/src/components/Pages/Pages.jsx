import React from "react";
import { Route } from "react-router-dom";

import Users from "./Users/Users";
import EditUsers from "./EditUsers/EditUsers";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    root: {
        width: "70%",
    },

});

const Pages = () => {
    const classes = useStyles();

    const users = useSelector(({users}) => users.items)
    const selectionUser  = useSelector(({users}) => users.editUser)

    const  editUser = users ? users.filter((user) => user.id === selectionUser) : null

    return (
        <Container className={classes.root}>
            <Route exact path={"/"} render={() => <Users users={users}/>} />
            <Route path={"/edit"} render={() => <EditUsers editUser={editUser[0]} />}/>
        </Container>
    )
}

export default Pages