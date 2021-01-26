import React from "react";

import User from "./User/User";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
});

const Users = ({users}) => {
    const classes = useStyles();

    if (users) {
        return (
            <Container className={classes.root}>
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
        )
    } else {
        return <div>No users</div>
    }

}

export default Users