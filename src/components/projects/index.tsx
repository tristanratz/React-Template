import React from "react";
import "./style.scss";
import {projects} from "../../store/projects";
import {Project} from "./project";

interface State {
    openElement: number; // With content teext beeing shown. Must be -1 or activeElement
    activeElement: number; // Element wich is currently active
}

interface Props {}

export type OpenEvent = "open"|"close"|"click";

export class Projects extends React.Component<Props, State> {

    state: State

    constructor(props: Props) {
        super(props);
        this.state = {
            openElement: -1,
            activeElement: 0
        }
    }

    handleOpenEvent(i: number, open: boolean) {
        this.setState({
            openElement: (open) ? i : -1,
        });
    }

    handleClickEvent(e: OpenEvent, i: number) {
        if (this.state.activeElement !== i) {
            return () => {
                this.setState({
                    openElement: -1,
                    activeElement: i,
                });
            };
        }

        switch (e) {
            case "open":
                return () => this.handleOpenEvent(i, true);
            case "close":
                return () => this.handleOpenEvent(i, false);
            case "click":
                return () => {};
        }

    }

    render(): React.ReactElement {
        const wrapperTransform = {
            'transform': `translateX(-${this.state.activeElement * (100 / projects.length)}%)`
        }

        return (
        <div className="projects" >
            <div className="contentWrapper">
                <h1>Projects</h1>
                <div className="projectsWindow">
                    <div className="projectsWrapper" style={wrapperTransform}>
                        {projects.map((project, i) => {
                            console.log(i)
                            return (
                                <Project project={project} open={i === this.state.openElement} onClick={
                                    (event:OpenEvent) => this.handleClickEvent(event, i)} active={i === this.state.activeElement} key={i}/>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>);
    }
}