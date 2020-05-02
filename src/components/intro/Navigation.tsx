import React from "react";
import {Icons} from "../Icons";
import {NavigationItem} from "./NavigationItem";

export class Navigation extends React.Component {
    render(): React.ReactElement| null | undefined {
        return (
            <div>
                <div className="navigation">
                    <NavigationItem section="about" name="About" />
                    <NavigationItem section="projects" name="Projects" />
                    <NavigationItem section="contact" name="Contact" />
                    <Icons />
                </div>
            </div>
        );
    }
}