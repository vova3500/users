import React from "react";

import {makeStyles} from '@material-ui/core/styles';

import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
});

const LoadingEditUser = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default LoadingEditUser