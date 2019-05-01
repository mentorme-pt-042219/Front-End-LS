import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const ProtectedRoute = ({ component: Component, errorStatusCode, ...rest}) => {

return(
<Route
{...rest}
render={props => {
    if(localStorage.getItem("token") && errorStatusCode  !== 403){
        return <Component {...props}/>;
} else {
    return <Redirect to="/login"/>;
}
}}
/>
);
};

const mstp = ({ errorStatusCode}) => ({
    errorStatusCode
});

export default connect(
    mstp, {}

)(ProtectedRoute);