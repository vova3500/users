import React from "react";

const Error = ({children, error}) => {
    switch (error) {
        case "" :{
            return children
        }
        default :{
            return <div>{error}</div>
        }
    }
}

export default  Error