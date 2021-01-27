import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {deleteUser} from "../../../../redux/actions/users"

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 30,
        paddingTop: 25,
        marginBottom: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    avatar: {
        width: 100,
        height: 100
    },
    cardActionArea: {
        display:"flex",
        flexDirection: "column"

    },
    cardActions: {
        alignSelf: "center"
    }
});

const User = ({id, firstName, lastName, email, picture}) => {
    const classes = useStyles();


    const dispatch =  useDispatch()

    const onDeleteUser = () => {
        dispatch(deleteUser(id))
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src={picture} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {lastName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {`FirstName: ${firstName}`}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {`Email: ${email}`}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button onClick={onDeleteUser} size="small" color="primary">
                    Delete
                </Button>
                <Link to={`/edit/${id}`}>
                    <Button  size="small" color="primary">
                        Edit
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

User.propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string
}

export default User