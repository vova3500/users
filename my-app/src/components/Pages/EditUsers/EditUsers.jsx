import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, Controller} from "react-hook-form";
import {Link, useParams} from "react-router-dom";
import Toastify from 'toastify-js'

import {loadingFullInfoUser, onEditUser} from "../../../redux/actions/users"

import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import LoadingEditUser from "../../Loaders/LoadingEditUser";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root: {
        width: "100%",
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 150,
        height: 150
    },
    form: {
        height: "15%",
        width: "40%",
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    input: {
        marginBottom: 10
    },
    toast: {
        width: 400,
        color: "white",
        position: "absolute",
        right: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
    }
});

const EditUsers = () => {
    const classes = useStyles();
    const params = useParams()
    const {handleSubmit, register, control} = useForm();

    const dispatch = useDispatch();

    const loading  = useSelector(({users}) => users.loading)
    const {
        id,
        picture,
        firstName,
        lastName,
        dateOfBirth,
        age,
        email
    } = useSelector(({users}) => users.activeUser)

    useEffect(() => {
        dispatch(loadingFullInfoUser(params.id))
    }, [dispatch, params.id])

    let myDate = dateOfBirth ? dateOfBirth.slice(0, 10) : 0

    const onSubmit = data => {
        dispatch(onEditUser({...data, id}))
        Toastify({
            text: "Changes are successful",
            duration: 3000,
            gravity: "bottom",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: classes.toast,
        }).showToast();
    };

    return !loading ? <Container className={classes.root}>
            <Container className={classes.exit}>
                <Link to="/">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <ArrowBackIcon fontSize="large" color="primary"/>
                    </IconButton>
                </Link>
            </Container>
            <Avatar className={classes.avatar} alt="Remy Sharp" src={picture}/>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    defaultValue={firstName}
                    className={classes.input}
                    label="FirstName"
                    name="firstName"
                    inputRef={register}
                />
                <TextField
                    defaultValue={lastName}
                    className={classes.input}
                    label="LastName"
                    name="lastName"
                    inputRef={register}
                />
                <TextField
                    label="Date of birth"
                    name="dateOfBirth"
                    type="date"
                    defaultValue={myDate}
                    className={classes.input}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputRef={register}
                />
                <TextField
                    label="email"
                    name="email"
                    type="email"
                    defaultValue={email}
                    className={classes.input}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputRef={register}
                />
                <Controller
                    name="age"
                    control={control}
                    className={classes.input}
                    render={({onChange}) =>
                        <>
                            <Typography id="discrete-slider" gutterBottom>
                                Age
                            </Typography>
                            <Slider
                                key={age}
                                onChange={e => onChange(Number(e.target.innerText))}
                                valueLabelDisplay="auto"
                                defaultValue={age}
                                step={1}
                                min={1}
                                max={110}
                            />
                        </>
                    }
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container> :
        <LoadingEditUser/>
}

export default EditUsers