import React, {RefObject} from 'react';
import "./style.scss";
import {Icons} from "../Icons";

interface Props {}

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

export class About extends React.Component<Props, State> {

    wrappingElement: RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.wrappingElement = React.createRef();

        this.state = {
            positionX: 0,
            positionY: 0,
            width: 0,
            height: 0,
        };

    }

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
                    the current developments in Artificial Intelligence and natural language processing.
                    <br/><br/>
                    Currently Tristan is employed as a working student at Finanz Informatik solutions plus GmbH
                    which is a direct subsidiary of the information systems service provider of one of Germany's
                    leading financial institutes.
                </p>

                <label>Technologies</label>
                <p>
                    MS Office,  Photoshop,
                    Java, HTML, CSS,
                    Python, Pycharm, PHP,
                    Artificial Intelligence, <br/>
                    Machine Learning, <br/>
                    Natural Language Processing, <br/>
                    git, PyCharm, IntelliJ,
                    Tensorflow, PyTorch,
                    JavaScript, React,
                    macOS, Linux, Windows,
                    AWS, Google Cloud,
                    Affinity Suite
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

    mouseMoved(e: React.MouseEvent): void {
        this.setState({
            positionY: e.clientY,
            positionX: e.clientX,
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    render(): React.ReactElement {
        /*const skillStyle = {
            transform: "scale(1.75)  translate(0, -25%) " +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,3deg)",
            zIndex: 2,
        };*/

        const imageStyle = {
            //backgroundPositionX: ((-this.state.positionX - this.state.width)/16 - this.state.width/5),
            //backgroundPositionY: ((-this.state.positionY - this.state.height)/16),
            transform: "translate3d(" + (this.state.positionX - this.state.width/2)/16 + "px, " +
        (this.state.positionY - this.state.height/2)/16 + "px, 0)"
        };

        return (
            <div className="about">
                <div className="contentWrapper"  ref={this.wrappingElement} onMouseMove={this.mouseMoved.bind(this)}>
                    <div className="left">
                        <div className="image" style={imageStyle} />
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            <h1>About</h1>
                            {this.retrieveContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}