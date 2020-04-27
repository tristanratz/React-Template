import React from "react";
import {Icons} from "../Icons";

export class Navigation extends React.Component {
    render(): React.ReactElement| null | undefined {
        return (
            <div>
                <div className="navigation">
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                    <Icons />
                </div>
            </div>
        );
    }
}