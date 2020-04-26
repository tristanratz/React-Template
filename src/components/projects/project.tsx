import React from  'react';
import {ProjectData} from "../../store/projects";
import classNames from "classnames";
import {
    IoLogoGithub,
    IoMdLink,
    IoMdClose
} from "react-icons/io";
import {ClickEvent} from "./index";

interface Props {
    project: any;
    open: boolean;
    active: boolean;
    onClick:(event:ClickEvent) => (() => void);
}

export class Project extends React.Component<Props> {
    project:ProjectData;

    constructor(props: Props) {
        super(props);

        this.project = props.project
    }

    render(): React.ReactElement {

        const projectCN = classNames({
            project: true,
            open: this.props.open,
            closed: !this.props.open,
            active: this.props.active,
            inactive: !this.props.active,
        });

        const backgroundImg = {
            background: (this.props.project.image) ? `url(${this.props.project.image})` : "transparent",
        }

        return (
            <div className={projectCN} onClick={this.props.onClick("click")}>
                <div className="backgroundImg" style={backgroundImg}/>
                <div className="titleSheet">
                    <div className="date">{this.project.date}</div>
                    <h2>{this.project.name}</h2>
                    <h5>{this.project.technologies.map((t, i) => (
                        (this.project.technologies.length-1 > i) ? `${t}, ` : t // So that the last tech has no comma
                    ))}</h5>
                    <div className="buttons">
                        <div className="button" onClick={this.props.onClick("open")}>
                            Learn more
                        </div>
                        {this.project.github && (
                            <a href={this.project.github!}><IoLogoGithub/></a>
                        )}
                        {this.project.link && (
                            <a href={this.project.link!}><IoMdLink/></a>
                        )}
                    </div>

                </div>
                <div className="closeButton" onClick={this.props.onClick("close")}><IoMdClose /></div>
                <div className="article">
                    <div className="articleContent">
                        <h3>{this.project.name} / {this.project.date}</h3>
                        <h5>{this.project.technologies.map((t, i) => (
                            (this.project.technologies.length-1 > i) ? `${t}, ` : t // So that the last tech has no comma
                        ))}</h5>
                        <strong>{this.project.description}</strong>
                        <p>
                            {this.project.text}
                        </p>
                        {(this.project.github || this.project.link) && <label>See more:</label>}
                        {this.project.github && (
                            <a href={this.project.github!}><IoLogoGithub/></a>
                        )}
                        {this.project.link && (
                            <a href={this.project.link!}><IoMdLink/></a>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}