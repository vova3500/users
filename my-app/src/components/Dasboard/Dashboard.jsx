import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/actions/user";

const useStyles = makeStyles({
    root:{
        width: "90%"
    },
    toolbar: {
        display:"flex",
        justifyContent: "space-between"
    },

});

const Dashboard = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const token = useSelector(({user}) => user.token)

    const onLogout = () => {
        localStorage.removeItem("token")
        dispatch(logOut())
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar} variant="dense">
                <Switch>
                    <Route path="/edit" children={<Title title="Edit user"/>} />
                    <Route path="/" children={<Title title="Dashboard"/>} />
                </Switch>
                {
                    token && <Button onClick={onLogout} color="inherit">LOGOUT</Button>
                }
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