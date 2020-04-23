import React from  'react';
import {ProjectData} from "../../store/projects";
import classNames from "classnames";
import {
    IoLogoGithub,
    IoMdLink
} from "react-icons/io";

interface Props {
    project: any;
    open: boolean;
    onClick:() => void;
}

export class Project extends React.Component<Props> {
    project:ProjectData;

    constructor(props: Props) {
        super(props);

        this.project = props.project
    }

    render(): React.ReactElement {

        const buttonCN = classNames({
            button: true,
            visible: !this.props.open,
        });

        return (
            <div className="project">
                <div className="titleSheet">
                    <text>{this.project.date}</text>
                    <h2>{this.project.name}</h2>
                    <h5>{this.project.technologies.map((t, i) => (
                        (this.project.technologies.length-1 > i) ? `${t}, ` : t // So that the last tech has no comma
                    ))}</h5>
                    <div className="buttons">
                        <div className={buttonCN} onClick={this.props.onClick}>
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
                {this.props.open && (
                    <div>
                        <strong>{this.project.description}</strong>
                        <p>
                            {this.project.text}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}