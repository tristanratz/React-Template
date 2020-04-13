import React from "react";
import "./style.scss"
import {Icons} from "../Icons";

interface Props {
    accentColor: string
}

export class Navigation extends React.Component<Props> {
    render(): React.ReactElement| null | undefined {
        const childStyle = {
            color: this.props.accentColor,
        } as React.CSSProperties;

        return (
            <div>
                <div className="navigation">
                    <h3 style={childStyle}>TRISTAN</h3><br/>
                    <h3 style={childStyle}>RATZ</h3><br/>
                    <div style={childStyle} className="navBar">
                        <div>About</div>
                        <div>Contact</div>
                        <div>Projects</div>
                    </div>
                </div>
                <div className="links">
                    <Icons />
                </div>
            </div>
        );
    }
}