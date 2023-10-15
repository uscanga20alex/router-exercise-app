import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function GoHomeButton() {
    const history = useHistory();
    return (
        <button type="button" onClick={() => history.push('/home?q=query')}>Users</button>
    )
}

export default GoHomeButton;