import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";

import Users from "./Users/Users";
import EditUsers from "./EditUsers/EditUsers";


import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import NotFound from "./NotFound/NotFound";
import * as PropTypes from "prop-types";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";

const useStyles = makeStyles({
    root: {
        width: "90%",
    },

});


Redirect.propTypes = {to: PropTypes.string};
const Pages = () => {
    const classes = useStyles();

    const token = useSelector(({user}) => user.token)

    return (
        <Container className={classes.root}>
            {token ?
                (<Switch>
                    <Route exact path={"/users"} component={Users}/>
                    <Route path={"/edit/:id"} component={EditUsers}/>
                    <Route path="/registration" component={Registration}/>
                    <Redirect to="/users"/>
                    <Route component={NotFound}/>
                </Switch>) : (
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/registration" component={Registration}/>
                        <Redirect to="/login"/>
                        <Route component={NotFound}/>
                    </Switch>
                )

            }
        </Container>
    )
}

export default Pages