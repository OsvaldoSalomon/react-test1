import React, {useState} from "react";
import axios from "axios";

function Server() {
    const [text, setText] = useState("");

    function getBackendInfo() {
        axios.get("https://react-test-f8va.onrender.com/",
            {crossdomain: true})
            .then(response => {
                console.log(response);
                setText(response.data.server);
        });
    }

    return (
        <div>
            <button onClick={getBackendInfo}>
                Get Server Info
            </button>
            <h1>{text}</h1>
        </div>
    )
}

export default Server;