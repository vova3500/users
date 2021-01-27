import React from "react";
import PropTypes from 'prop-types';

import User from "./User/User";
import Pagination from "./Pagination/Pagination";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

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
    pagination:{
        display: "flex",
        justifyContent: "center",
        paddingTop:20,
        paddingBottom:20
    }
});

const Users = ({users}) => {
    const classes = useStyles();

    if (users) {
        return (
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
                    <Pagination />
                </Container>
            </Container>
        )
    } else {
        return <div>No users</div>
    }
}

Users.propTypes = {
    users: PropTypes.array,
}

export default Users