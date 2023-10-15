import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FowardButton(){
    const history = useHistory();

    return(
        <button type="button" onClick={() => history.goForward()}>
            Forward
        </button>
    )
}

export default FowardButton;