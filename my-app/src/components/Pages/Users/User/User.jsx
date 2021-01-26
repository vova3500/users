import React from "react";
import {useDispatch} from "react-redux";

import {deleteUser} from "../../../../redux/actions/users"

import "./user.css"

const User = ({id, firstName, lastName, email, picture}) => {
    const dispatch =  useDispatch()

    const hendelDeleteUser = () => {
        console.log("dsa")
        dispatch(deleteUser(id))
    }

    return (
        <div className="user">
            <div className="user-tools">
                <div>
                    <img src="https://img.icons8.com/plasticine/100/000000/edit.png"/>
                </div>
                <div onClick={hendelDeleteUser}>
                    <img src="https://img.icons8.com/plasticine/100/000000/delete-sign.png"/>
                </div>
            </div>
            <div className="user-info">
                <div className="user-info-picture">
                    <img src={picture} />
                </div>
                <div>{`FirstName: ${firstName}`}</div>
                <div>{`LastName: ${lastName}`}</div>
                <div>{`Email: ${email}`}</div>
            </div>
        </div>
    )
}

export default User