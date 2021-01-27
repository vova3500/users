import React, {useEffect} from "react";

import User from "./User/User";
import Pagination from "./Pagination/Pagination";

import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {loadingUsers} from "../../../redux/actions/users";

const useStyles = makeStyles({
    root: {
        width: "100%",
        flexDirection: "column"
    },
    users: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20
    }
});

const Users = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const users = useSelector(({users}) => users.items)
    const loading = useSelector(({users}) => users.loading)


    useEffect(() => {
        dispatch(loadingUsers())
    }, [dispatch])

    return (
        !loading ?
            <Container className={classes.root}>
                <Container className={classes.users}>
                    {users.map((user) => (
                        <User
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            picture={user.picture}
                        />))
                    }
                </Container>
                <Container className={classes.pagination}>
                    <Pagination/>
                </Container>
            </Container> : <div>loading...</div>
    )
}

export default Users