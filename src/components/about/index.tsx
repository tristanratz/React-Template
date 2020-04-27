import React, {RefObject} from 'react';
import "./style.scss";
import {Icons} from "../Icons";
import classNames from "classnames";
import {
    IoMdPin,
    IoMdFlask,
    IoMdHammer,
    IoMdSave,
    IoMdDesktop,
    IoMdHeart
} from "react-icons/io"

interface Props {}

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
    wrap: number;
    imageStyle: React.CSSProperties
}

export class About extends React.Component<Props, State> {

    wrappingElement: RefObject<HTMLDivElement>;
    imageElement: RefObject<HTMLDivElement>;
    textWrapper: RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.wrappingElement = React.createRef();
        this.imageElement = React.createRef();
        this.textWrapper = React.createRef();

        this.state = {
            positionX: 0,
            positionY: 0,
            width: 0,
            height: 0,
            wrap: 0,
            imageStyle: {}
        };

        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
        if (this.textWrapper.current! && this.imageElement.current!) {
            if (this.textWrapper.current!.getBoundingClientRect().y >
                this.imageElement.current!.getBoundingClientRect().y &&
                this.state.wrap !== 0) {
                this.setState({
                    wrap: 0
                });
                this.forceUpdate();
            } else if (
                this.textWrapper.current!.getBoundingClientRect().y <
                this.imageElement.current!.getBoundingClientRect().y &&
                this.state.wrap !== 1
            ) {
                this.setState({
                    wrap: 1
                });
            }
        }
        const textHeight = (this.textWrapper.current) ? this.textWrapper.current!.getBoundingClientRect().height : -1;
        this.setState({
            imageStyle: {
                //backgroundPositionX: ((-this.state.positionX - this.state.width)/16 - this.state.width/5),
                //backgroundPositionY: ((-this.state.positionY - this.state.height)/16),
                height: (textHeight > 0) ? `${textHeight*0.9}px` : "50vh",
                width: textHeight*0.75,
                margin: (this.state.wrap === 1) ? "0 0 auto" : "0 auto auto",
                float: (this.state.wrap === 1) ? "right" : "unset",
                transform: "translate3d(" + ((this.state.positionX - this.state.width/2)/128 +
                    this.state.wrap*(window.innerWidth)/32) + "px, " +
                    ((this.state.positionY - this.state.height/2)/128 +
                        (1-this.state.wrap)*(window.innerHeight)/32)
                    + "px, 0)"
            }
        })
    }

    retrieveContent() : React.ReactElement {
        return (
            <div>
                <label>Name</label>
                <p>Tristan Ratz</p>

                <label>About</label>
                <p>
                    Tristan is currently studying business informatics at the technical university of Darmstadt.
                    Beneath his great excitment in informatics Tristan is very interested in Cloud Computing and
                    the current developments in Artificial Intelligence and natural language processing.
                    <br/><br/>
                    At the moment Tristan is employed as a working student at Finanz Informatik Solutions Plus GmbH
                    which is a direct subsidiary of the information systems service provider of one of Germany's
                    leading financial institutes.
                    <br/><br/>
                    Tristan is ambitious, curious, a fast learner and a team player, which makes him, besides his
                    knowledge a perfect fit for almost all projects.
                </p>
                <label>Mail</label>
                <p>
                    <a className="contact" href="mailto:mail@tristanratz.com">mail@tristanratz.com</a>
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

    componentDidMount(): void {
        this.handleResize();
    }

    render(): React.ReactElement {
        const imageStyle = this.state.imageStyle;

        return (
            <div className="about" id="about" onMouseMove={this.mouseMoved.bind(this)}>
                    <h1>About</h1>
                <div className="contentWrapper" ref={this.wrappingElement}>
                    <div className="left">
                        <div ref={this.imageElement} className="image" style={imageStyle} />
                    </div>
                    <div className="right" ref={this.textWrapper}>
                        <div className="wrapper">
                            {this.retrieveContent()}
                        </div>
                    </div>
                </div>
                <div className={classNames({"contentWrapper":true, "aboutCards":true})}>
                    <div>
                        <IoMdPin />
                        <label>Based in</label>
                        <p>
                            <strong>Darmstadt</strong> near Frankfurt, <br/>
                            Hesse, <br/>
                            Germany
                        </p>
                    </div>
                    <div>
                        <IoMdHammer />
                        <label>Preferred ides</label>
                        <p>
                            IntelliJ, PyCharm, WebStorm
                        </p>
                    </div>
                    <div>
                        <IoMdHeart />
                        <label>Interests</label>
                        <p>
                            Machine Learning <br/>
                            Natural Language Processing, <br/>
                            Artificial Intelligence, <br/>
                        </p>
                    </div>
                    <div>
                        <IoMdFlask />
                        <label>Technologies</label>
                        <p>
                            Python, git,
                            Tensorflow, PyTorch,
                            Java,
                            HTML, CSS,
                            JavaScript, React, Redux, <br />
                            Amazon Web Services, Google Cloud
                            <br />
                        </p>
                    </div>
                    <div>
                        <IoMdDesktop />
                        <label>Operating systems</label>
                        <p>
                            macOS, Linux, Windows
                        </p>
                    </div>
                    <div>
                        <IoMdSave />
                        <label>Programs</label>
                        <p>
                            MS Office,  Photoshop,
                            Affinity Suite
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}