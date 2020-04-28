import React, {RefObject} from 'react';
import "./style.scss";
import {Icons} from "../Icons";
import classNames from "classnames";
import Fade from 'react-reveal/Fade';

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
    wrapperWidth: number;
    wrapperHeight: number;
    wrap: number;
    imageStyle: React.CSSProperties
}

export class About extends React.Component<Props, State> {

    wrappingElement: RefObject<HTMLDivElement>;
    imageElement: RefObject<HTMLDivElement>;
    textWrapper: RefObject<HTMLDivElement>;
    textWidth: number;
    textHeight: number;
    textOffset: number;

    constructor(props: Props) {
        super(props);
        this.wrappingElement = React.createRef();
        this.imageElement = React.createRef();
        this.textWrapper = React.createRef();

        this.state = {
            wrapperWidth: 0,
            wrapperHeight: 0,
            wrap: 0,
            imageStyle: {}
        };

        this.textWidth = 0;
        this.textHeight = 0;
        this.textOffset = 0;

        this.handleResize = this.handleResize.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
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
        this.updateStyles();
    }

    updateStyles() {
        const textHeight = (this.textWrapper.current) ? this.textWrapper.current!.getBoundingClientRect().height : -1;
        const textWidth = (this.textWrapper.current) ? this.textWrapper.current!.getBoundingClientRect().width : -1;
        console.log("textHeight", textHeight)
        const imageHeight = (this.state.wrap === 1) ? `${textHeight*0.9}px` : `${textWidth*(1/0.75)}px`;
        const imageWidth = (this.state.wrap === 0) ? `${textWidth*0.9}px` : `${textWidth}px`;
        console.log("imageHeight", imageHeight)
        console.log((this.state.wrap*(window.innerWidth)/32))

        const imageStyle = {
            height: imageHeight,
            width: imageWidth,
            margin: (this.state.wrap === 1) ? "0 0 auto" : "0 auto auto",
            float: (this.state.wrap === 1) ? "right" : "unset",
            transform: "translate3d(" + (this.state.wrap*(window.innerWidth)/32) + "px, " +
            ((1-this.state.wrap)*(window.innerHeight)/32)
            + "px, 0)"
        } as React.CSSProperties

        if (this.state.imageStyle.height !== imageHeight || this.state.imageStyle.width !== imageWidth ||
            (this.wrappingElement.current && this.wrappingElement.current!.offsetHeight !== this.state.wrapperHeight) ||
            (this.wrappingElement.current && this.wrappingElement.current!.offsetWidth !== this.state.wrapperWidth)
        ) {
            this.setState({
                wrapperWidth: (this.wrappingElement.current) ? this.wrappingElement.current!.offsetWidth : 0,
                wrapperHeight: (this.wrappingElement.current) ? this.wrappingElement.current!.offsetHeight : 0,
                imageStyle: imageStyle
            });
        }
    }

    retrieveContent() : React.ReactElement {
        return (
            <div>
                <label>Name</label>
                <p>Tristan Ratz</p>

                <label>About</label>
                <p>
                    I am currently studying business informatics at the technical university of Darmstadt.
                    Beneath my great excitment in informatics I am very interested in Cloud Computing and
                    the current developments in Artificial Intelligence and natural language processing.
                    <br/><br/>
                    At the moment I am is employed as a working student at Finanz Informatik Solutions Plus GmbH,
                    which is a direct subsidiary of the information systems service provider of one of Germany's
                    leading financial institutes.
                    <br/><br/>
                    I am ambitious, curious, a fast learner and a team player, which makes me, besides my
                    knowledge a perfect fit for almost all projects.<br/>
                    Do not hesitate to contact me.
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
        this.handleResize();
    }

    componentDidMount(): void {
        this.handleResize();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
            this.handleResize();
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log(nextState);
        return !(!!this.state.imageStyle.width) || nextState !== this.state || nextProps !== this.props
    }

    render(): React.ReactElement {
        const imageStyle = this.state.imageStyle;

        return (
            <div className="about" id="about" onMouseMove={this.mouseMoved.bind(this)}>
                    <h1>About</h1>
                <div className="contentWrapper" ref={this.wrappingElement}>
                    <Fade left>
                        <div className="left">
                            <div ref={this.imageElement} className="image" style={imageStyle} />
                        </div>
                    </Fade>
                    <div className="right" ref={this.textWrapper}>
                        <div className="wrapper" ref={(e) => {
                            this.textOffset = (e) ? e.offsetHeight : 0;
                            this.textHeight = (e) ? e.offsetHeight : 0;
                            this.textWidth = (e) ? e.offsetWidth : 0;
                        }
                        }>
                            <Fade cascade >
                                {this.retrieveContent()}
                            </Fade>
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