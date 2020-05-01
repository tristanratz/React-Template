import React from "react";
import "./style.scss"
import {Icons} from "../Icons";
import Fade from "react-reveal/Fade";
import {person} from "../../store/person";

interface Props {
    visible: boolean;
}

export default class Imprint extends React.Component {
    render(): React.ReactElement {
        return (
            <div className="contact"  id="contact">
                <Fade>
                    <div className="contentWrapper">
                        <h1>Contact</h1>
                        <p>
                            Please feel free to contact me.<br />
                        </p>
                        <p>
                            <label>Mail</label>
                            <a className="contact" href={"mailto:" + person.email}>{person.email}</a>
                        </p>

                        <p>
                            <label>Area</label>
                            {person.city}, {person.country}
                        </p>
                        <label>Links</label>
                        <p><Icons /></p>

                        <p className="imprint"
                           onClick={() => alert("Here goes imprint")}>
                            Impring & Privacy
                        </p>

                        <label>
                            <a href="tristanratz.com">
                                © by Tristan Ratz
                            </a>
                        </label>
                    </div>
                </Fade>
            </div>);
    }
}