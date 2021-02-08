import React from "react";
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/actions/user";

const Error = ({children, error}) => {
    const dispatch = useDispatch()
    switch (error) {
        case "Request failed with status code 403" :{
            localStorage.removeItem("token")
            dispatch(logOut())
            return <div>{error}</div>
        }
        case "" :{
            return children
        }
        default :{
            return <div>{error}</div>
        }
    }
}

export default  Error