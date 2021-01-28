import React, {useEffect} from "react";
import {loadingUsers} from "../../../redux/actions/users";

import User from "./User/User";
import Pagination from "./Pagination/Pagination";
import SkeletonUser from "../../Loaders/SkeletonUser";
import Error from "../../../utils/Error/Error";

import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";

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
    const error = useSelector(({users}) => users.error)


    useEffect(() => {
        dispatch(loadingUsers())
    }, [dispatch])

    return (
        <Container className={classes.root}>
            <Container className={classes.users}>
                <SkeletonUser loading={loading}>
                    <Error error={error}>
                        {
                            users.map((user) => (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    email={user.email}
                                    picture={user.picture}

                                />))
                        }
                        <Container className={classes.pagination}>
                            <Pagination/>
                        </Container>
                    </Error>
                </SkeletonUser>
            </Container>
        </Container>

    )
}

export default Users