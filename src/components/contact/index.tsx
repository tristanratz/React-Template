import React from "react";
import "./style.scss"
import {Icons} from "../Icons";
import Fade from "react-reveal/Fade";
import {person} from "../../store/person";
import Imprint from "../imprint";
import retrieveImprint from "../../store/imprint";

interface Props {}
interface State {
    showImprint: boolean;
}

export class Contact extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showImprint: false
        }
    }

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

                        {retrieveImprint() &&
                            <p className="imprint"
                               onClick={() => this.setState({showImprint: true})}>
                                Impring & Privacy
                            </p>
                        }

                        <label>
                            <a href="tristanratz.com">
                                © by Tristan Ratz
                            </a>
                        </label>
                    </div>
                </Fade>
                {retrieveImprint() &&
                    <Imprint visible={this.state.showImprint}
                             onClick={() => this.setState({showImprint: false})}/>
                }
            </div>);
    }
}