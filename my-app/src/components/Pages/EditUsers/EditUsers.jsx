import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import { useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Toastify from 'toastify-js'

import {onEditUser} from "../../../redux/actions/users"

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
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
   form:{
      height: "15%",
      width: "40%",
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexWrap: "wrap"
   },
   input:{
      marginBottom: 10
   },
   toast:{
      width: 400,
      color: "white",
      position: "absolute",
      right:20,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 5,
   }
});

const EditUsers = ({id, picture, firstName, dateOfBirth, location,phone, gender}) => {
   const classes = useStyles();

   const dispatch =  useDispatch();

   const {handleSubmit, register } = useForm();

   let myDate = dateOfBirth ? dateOfBirth.slice(0, 10) : 0

   const onSubmit = data => {
      console.log(data)
      dispatch(onEditUser({...data, id}))
      Toastify({
         text: "This is a toast",
         duration: 3000,
         gravity: "bottom",
         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
         className: classes.toast,
      }).showToast();
   };


   return  id ? <Container className={classes.root}>
      <Container className={classes.exit}>
         <Link to="/">
            <IconButton color="primary" aria-label="upload picture" component="span">
               <ArrowBackIcon fontSize="large" color="primary"/>
            </IconButton>
         </Link>
      </Container>
      <Avatar className={classes.avatar} alt="Remy Sharp" src={picture} />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
         <TextField
             defaultValue={firstName}
             className={classes.input}
             label="FirstName"
             name="firstName"
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
         <Button type="submit" variant="contained" color="primary">
            Submit
         </Button>
      </form>
   </Container> :
       <Container  className={classes.root}>
         <Link to="/">
            <IconButton color="primary" aria-label="upload picture" component="span">
               <ArrowBackIcon fontSize="large" color="primary"/>
            </IconButton>
         </Link>
         <div>No user</div>
      </Container>
}

EditUsers.propTypes = {
   editUser: PropTypes.object
}


export default EditUsers