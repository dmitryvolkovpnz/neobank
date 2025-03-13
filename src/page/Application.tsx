import {useEffect} from "react";
import {useParams} from "react-router-dom";
import ScoringForm from "../components/application/form/Form";

function Application() {
    const appId = Number(useParams().applicationId)

    return (
        <div className="container">
            <ScoringForm/>
        </div>
    );
}

export default Application;