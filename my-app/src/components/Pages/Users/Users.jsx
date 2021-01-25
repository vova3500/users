import React from "react";

import User from "./User/User";

import "./users.css"
import {useSelector} from "react-redux";

const Users = () => {
    const users = useSelector(({users}) => users.items)

    if (users) {
        return (
            <div className="users">
                {users.map((user) => (
                    <User
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        picture={user.picture}
                    />))}
            </div>
        )
    } else {
        return <div>No users</div>
    }

}

export default Users