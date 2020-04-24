import React from "react";
import "./style.scss";
import {ProjectData, projects} from "../../store/projects";
import {Project} from "./project";

interface State {
    openElement: number;
}

interface Props {}

export type OpenEvent = "open"|"close"|"click";

export class Projects extends React.Component<Props, State> {

    state: State

    constructor(props: Props) {
        super(props);
        this.state = {
            openElement: -1
        }
    }

    handleOpenEvent(i: number, project: ProjectData, open: boolean) {
        this.setState({
            openElement: (open) ? i : -1,
        });
    }

    render(): React.ReactElement {
        return (
        <div className="projects">
            <div className="contentWrapper">
                <h1>Projects</h1>
                <div className="projectsWrapper">
                    {projects.map((project, i) => {
                        return (
                            <Project project={project} open={i === this.state.openElement} onClick={
                                (event:OpenEvent) => {
                                    switch (event) {
                                        case "open":
                                            return () => this.handleOpenEvent(i, project, true);
                                        case "close":
                                            return () => this.handleOpenEvent(i, project, false);
                                        case "click":
                                            return () => {};
                                    }
                                }} key={i}/>
                        );
                    })}
                </div>

            </div>
        </div>);
    }
}