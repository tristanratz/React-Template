import React, { RefObject} from 'react';
import {Navigation} from "./Navigation";

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

interface Props {
    accentColor: string
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

    render(): React.ReactElement | null | undefined {

        const { accentColor } = this.props;

        const fnameStyle = {
            color: accentColor,
            transform: "translate3d(" + (-this.state.positionX + this.state.width/2)/16 + "px, " +
                (-this.state.positionY + this.state.height*1.5)/16 + "px, 0)" +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            zIndex: 2,
        };

        const lnameStyle = {
            color: accentColor,
            transform: "translate3d(" + (-this.state.positionX + this.state.width/2)/8 + "px, " +
                (-this.state.positionY - this.state.height*2)/8 + "px, 0) " +
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            zIndex: 3,
        };

        return (
            <div ref={this.wrappingElement} className="intro">
                <div className="effect" style={fnameStyle}>TRISTAN</div>
                <div className="effect" style={lnameStyle}>RATZ</div>
                <div className="overlay" onMouseMove={this.mouseMoved.bind(this)} />
                <Navigation accentColor={accentColor} />
            </div>);
    }
}