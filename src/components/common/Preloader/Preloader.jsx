import preloader from "../../../assets/gif/Eclipse-1.2s-200px.svg";
import React from "react";

let Preloader = (props) => {
    return <div>
        {props.isFetching ? <img src={preloader} alt=""/> : null}
    </div>
}

export default Preloader