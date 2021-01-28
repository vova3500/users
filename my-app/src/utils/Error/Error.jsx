import React from "react";

const Error = ({children, error}) => {
    if (error){
       return <>{error}</>
    }

    return children
}

export default  Error