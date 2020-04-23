import React from "react";
import "./style.scss";
import {projects} from "../../store/projects";
import {Project} from "./project";


export class Projects extends React.Component {

    handleClick(i: number) {

    }

    render(): React.ReactElement {
        return (
        <div className="projects">
            <div className="contentWrapper">
                <h1>Projects</h1>
                <div className="projectsWrapper">
                    {projects.map((project, i) => {
                        const open = false;
                        return (
                            <Project project={project} open={open} onClick={() => this.handleClick(i)} key={i}/>
                        );
                    })}
                </div>

            </div>
        </div>);
    }
}