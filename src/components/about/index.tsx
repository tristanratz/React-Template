import React from 'react';
import "./style.scss";
import {Icons} from "../Icons";

interface Props {
    accentColor: string
}

export class About extends React.Component<Props> {


    retrieveContent() : React.ReactElement {
        return (
            <div>
                <label>Based in</label>
                <p><strong>Darmstadt</strong> near Frankfurt, <br/>
                Germany</p>

                <label>Name</label>
                <p>Tristan Ratz.</p>

                <label>About</label>
                <p>
                    Tristan is currently studying business informatics at the technical university of Darmstadt.
                    Beneath his great excitment in informatics Tristan is very interested in Cloud Computing and
                    the the current developments in Artificial Intelligence.
                    <br/><br/>
                    Currently Tristan is employed as a working student at finanz informatik solutions plus GmbH
                    which is a direct subsidy of the information systems service provider of one of germany's
                    leading financial institutes.
                </p>

                <label>Contact</label>
                <p>
                    Feel free to make contact via <br/>
                    <a className="contact" href="mailto:mail@tristanratz.com">mail@tristanratz.com</a>
                    <br/>
                    <br/>
                    Or check out the <br />
                    <a className="contact">Contact form ></a>
                </p>

                <label>Links</label>
                <p><Icons /></p>
            </div>
        );
    }

    render(): React.ReactElement {
        const wrapperStyle = {
            background: this.props.accentColor,
        };

        return (
            <div style={wrapperStyle} className="about">
                <div className="left">
                    <p>
                        Machine Learning, <br/>
                        Artificial Intellgence, <br/>
                        Natural Language Processing, <br/>
                        Tensorflow, PyTorch, <br/>
                        git, PyCharm, IntelliJ, <br/>
                        Python, Pycharm, PHP, <br/>
                        Java, HTML, CSS, <br/>
                        JavaScript, React,<br/>
                        macOS, Linux, Windows, <br/>
                        AWS, Google Cloud, <br/>
                        MS Office,  Photoshop, <br/>
                        Affinity Suite <br/>
                    </p>
                </div>
                <div className="right">
                    <h1>About</h1>
                    <p>
                        {this.retrieveContent()}
                    </p>
                </div>
            </div>
        );
    }
}