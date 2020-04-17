import React from "react";
import "./style.scss"
import {Icons} from "../Icons";

export class Navigation extends React.Component {
    render(): React.ReactElement| null | undefined {
        return (
            <div>
                <div className="navigation">
                    <h3>TRISTAN</h3><br/>
                    <h3>RATZ</h3><br/>
                    <div className="navBar">
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