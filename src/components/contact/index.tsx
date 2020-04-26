import React from "react";
import "./style.scss"
import {Icons} from "../Icons";

export class Contact extends React.Component {
    render(): React.ReactElement {
        return (
            <div className="contact">
                <div className="contentWrapper">
                    <h1>Contact</h1>
                    <p>
                        Please feel free to contact me.<br />
                    </p>
                    <p>
                        <label>Mail</label>
                        <a className="contact" href="mailto:mail@tristanratz.com">mail@tristanratz.com</a>
                    </p>

                    <p>
                        <label>Area</label>
                        Darmstadt, Germany
                    </p>
                    <label>Links</label>
                    <p><Icons /></p>

                    <p className="imprint"
                       onClick={() => alert("Here goes imprint")}>
                        Impring & Privacy
                    </p>
                </div>
            </div>);
    }
}