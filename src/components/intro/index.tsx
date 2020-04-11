import React, {MouseEventHandler, RefObject} from 'react';
import {Navigation} from "./Navigation";

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

interface Props {

}

export class Intro extends React.Component<Props, State> {

    state: State;
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

    componentDidMount(): void {
        this.setState({
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    mouseMoved(e: React.MouseEvent): void {
        this.setState({
            positionX: e.nativeEvent.offsetX,
            positionY: e.nativeEvent.offsetY,
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const backgroundColor = "#ddd";
        const accentColor: string = "green";

        const wrapperStyle = {
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            background: backgroundColor,
            textShadow: "1px 0 black, 0px 1px black, -1px 0 black, 0px -1px black", //, 1px 1px black, -1px -1px black"
            fontSize: "45vh",
            textAlign: "center",
            transformOrigin: "center",
            perspective: "1000px"
        } as React.CSSProperties;

        const fnameStyle = {
            transformOrigin: "inherit",
            transform: "translate3d(" + (-this.state.positionX + this.state.width/2)/16 + "px, " +
                (-this.state.positionY + this.state.height*1.5)/16 + "px, 0)" +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            color: backgroundColor,
            zIndex: 2,
        };

        const lnameStyle = {
            transformOrigin: "inherit",
            transform: "translate3d(" + (-this.state.positionX + this.state.width/2)/8 + "px, " +
                (-this.state.positionY - this.state.height*2)/8 + "px, 0) " +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            color: backgroundColor,
            zIndex: 3,
        };

        const overlay = {
            zIndex: 4,
            width: "100%",
            height: "100vh",
            background: "transparent",
            position:"absolute",
            top: 0,
            right: 0
        } as React.CSSProperties;

        return (
            <div ref={this.wrappingElement} style={wrapperStyle}>
                {/*{(this.state.positionX - this.state.width/2)/(this.state.width/2)}*/}
                {/*{(this.state.positionY - this.state.height/2)/(this.state.height/2)}*/}
                <div style={fnameStyle}>Tristan</div>
                <div style={lnameStyle}>Ratz</div>
                <div style={overlay} onMouseMove={this.mouseMoved.bind(this)} />
                <Navigation accentColor={accentColor} />
            </div>);
    }
}