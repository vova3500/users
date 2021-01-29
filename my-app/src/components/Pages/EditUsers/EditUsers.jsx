import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, Controller} from "react-hook-form";
import {Link, useParams} from "react-router-dom";
import Toastify from 'toastify-js'

import {loadingFullInfoUser, onEditUser} from "../../../redux/actions/users"
import Error from "../../../utils/Error/Error";
import Input from "../../../utils/Input/Input";
import {calcDate, getCurrentAge} from "../../../utils/helpers";

import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import LoadingEditUser from "../../Loaders/LoadingEditUser";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

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
    const {handleSubmit, register, control, setValue} = useForm();

    const dispatch = useDispatch();

    const loading = useSelector(({users}) => users.loading)
    const error = useSelector(({users}) => users.error)
    const {
        id,
        picture,
        firstName,
        lastName,
        dateOfBirth,
        age,
        email
    } = useSelector(({users}) => users.activeUser)

    let myDate = dateOfBirth ? dateOfBirth.slice(0, 10) : 0

    useEffect(() => {
        dispatch(loadingFullInfoUser(params.id))
    }, [dispatch, params.id])

    const toast = () => {
        Toastify({
            className: classes.toast,
            text: "Changes are successful",
            duration: 3000,
            newWindow: true,
            gravity: "bottom",
            position: "left",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true,
        }).showToast();
    }

    const onSubmit = data => {
        console.log(data)
        dispatch(onEditUser({...data, id}, toast))
    };

    const handleChangeDateOfBirth = (e) => {
        const newAge = getCurrentAge(e.target.value)

        setValue("dateOfBirth", e.target.value);
        setValue("age", newAge);
    }
    const handleChangeAge = (value) => {
        const newDate = calcDate(value, dateOfBirth)

        setValue("age", value);
        setValue("dateOfBirth", newDate)
    }

    React.useEffect(() => {
        register("dateOfBirth");
    }, [register])

    React.useEffect(() => {
        register("age");
    }, [register])

    return (
        <LoadingEditUser loading={loading}>
            <Container className={classes.root}>
                <Container className={classes.exit}>
                    <Link to="/">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <ArrowBackIcon fontSize="large" color="primary"/>
                        </IconButton>
                    </Link>
                </Container>
                <Error error={error}>
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={picture}/>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            className={classes.input}
                            inputRef={register}
                            name="firstName"
                            defaultValue={firstName}
                        />
                        <Input
                            className={classes.input}
                            inputRef={register}
                            name="lastName"
                            defaultValue={lastName}
                        />
                        <Input
                            className={classes.input}
                            inputRef={register}
                            name="email"
                            defaultValue={email}
                            type="email"
                        />
                        <TextField
                            className={classes.input}
                            defaultValue={myDate}
                            inputRef={register}
                            label="DateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChangeDateOfBirth}
                        />
                        <Controller
                            name="age"
                            control={control}
                            defaultValue={age || 0}
                            render={({value}) => <div>
                                <Typography id="discrete-slider" gutterBottom>
                                    Age
                                </Typography>
                                <Slider
                                    onChange={(e, value) => {
                                        handleChangeAge(value)
                                    }}
                                    value={value || 0}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={1}
                                    max={110}
                                />
                            </div>}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Error>
            </Container>
        </LoadingEditUser>
    )
}

export default EditUsers