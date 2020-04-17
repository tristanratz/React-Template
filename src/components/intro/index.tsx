import React, { RefObject} from 'react';
import {Navigation} from "./Navigation";

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

interface Props {}

export class Intro extends React.Component<Props, State> {

    wrappingElement: RefObject<HTMLDivElement>;
    fName: RefObject<HTMLDivElement>;
    lName: RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.wrappingElement = React.createRef();
        this.fName = React.createRef();
        this.lName = React.createRef();

        this.state = {
            positionX: window.innerWidth/2,
            positionY: window.innerHeight/2,
            width: 0,
            height: 0,
        };

    }

    componentDidMount(): void {
        this.setState({
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    mouseMoved(e: React.MouseEvent): void {
        this.setState({
            positionX: e.clientX,
            positionY: e.clientY,
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    render(): React.ReactElement | null | undefined {

        const fNameHeight = (this.fName.current) ? this.fName.current!.offsetHeight : 0;
        const fNameWidth = (this.fName.current) ? this.fName.current!.offsetWidth : 0;

        const fnameStyle = {
            transform: "translate3d(" + ((-this.state.positionX + this.state.width/2)/16 - fNameWidth/2) + "px, " +
                ((-this.state.positionY - this.state.height)/16 - fNameHeight*0.75) + "px, 0)" +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            zIndex: 2,
        };

        const lNameHeight = (this.lName.current) ? this.lName.current!.offsetHeight : 0;
        const lNameWidth = (this.lName.current) ? this.lName.current!.offsetWidth : 0;

        const lnameStyle = {
            transform: "translate3d(" + ((-this.state.positionX + this.state.width/2)/8 - lNameWidth/2) + "px, " +
                (((-this.state.positionY - this.state.height)/8) - lNameHeight/4)+ "px, 0) " +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/100)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/100)/(this.state.width/2) +", 0,10deg)",
            zIndex: 3,
        };

        return (
            <div ref={this.wrappingElement} className="intro" onMouseMove={this.mouseMoved.bind(this)}>
                <div className="effectWrapper">
                    <div ref={this.fName} className="effect" style={fnameStyle}>TRISTAN</div>
                    <div ref={this.lName} className="effect" style={lnameStyle}>RATZ</div>
                </div>
                <Navigation/>
            </div>);
    }
}