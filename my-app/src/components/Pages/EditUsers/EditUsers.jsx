import React from "react";
import { useForm, Controller } from "react-hook-form";
import {onEditUser} from "../../../redux/actions/users"

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";

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
   }
});

const EditUsers = ({editUser}) => {
   const classes = useStyles();

   const dispatch =  useDispatch();

   const {handleSubmit, control } = useForm();
   const onSubmit = data => {
      let editUserId = editUser.id
      dispatch(onEditUser({...data, id:editUserId}))
   };

   return  editUser ? <Container className={classes.root}>
      <Avatar className={classes.avatar} alt="Remy Sharp" src={editUser.picture} />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
         <Controller
             name="firstName"
             control={control}
             defaultValue={editUser.firstName}
             render={props =>
                 <TextField
                     onChange={e => props.onChange(e.target.value)}
                     defaultValue={editUser.firstName}
                     className={classes.input}
                     label="FirstName"
                     type="input"
                 />
             }
         />
         <Controller
             name="lastName"
             control={control}
             defaultValue={editUser.lastName}
             render={props =>
                 <TextField
                     onChange={e => props.onChange(e.target.value)}
                     defaultValue={editUser.lastName}
                     className={classes.input}
                     label="LastName"
                     type="input"
                 />
             }
         />
         <Controller
             name="email"
             control={control}
             defaultValue={editUser.email}
             render={props =>
                 <TextField
                     onChange={e => props.onChange(e.target.value)}
                     defaultValue={editUser.email}
                     className={classes.input}
                     label="Email"
                     type="input"
                 />
             }
         />
         <Button type="submit" variant="contained" color="primary">
            Submit
         </Button>
      </form>
   </Container> : <Container>No user</Container>
}

export default EditUsers