import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 40,
        fontSize: 24
    },
})

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div>Not Found</div>
        </div>
    )
}

export default NotFound
