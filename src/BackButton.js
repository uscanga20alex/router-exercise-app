import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BackButton(){
    const history = useHistory();
    
    return(
        <button type="button" onClick={() => history.goBack()}>Go Back</button>
    );
}

export default BackButton;