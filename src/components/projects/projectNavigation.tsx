import React from "react";
import {ProjectData} from "../../store/projects";
import {
    IoMdArrowBack,
    IoMdArrowForward,
    IoMdRadioButtonOff,
    IoMdRadioButtonOn,
    IoMdShuffle
} from "react-icons/io"
import {ClickEvent} from "./index";
import classNames from "classnames";

interface Props {
    active: number;
    projects: ProjectData[];
    onClick: (e:ClickEvent, i: number) => (() => void);
}

interface State {
    hoverElement: number;
    hover: boolean;
}

export class ProjectNavigation extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            hoverElement: 0,
            hover: false
        }

        this.handleMouse = this.handleMouse.bind(this);
    }

    handleMouse(event: "enter" | "leave", i: number) {
        this.setState({
            hoverElement: i,
            hover: (event === "enter"),
        })
    }

    random (min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    render(): React.ReactElement {

        const { active, projects, onClick } = this.props
        const max = projects.length-1;

        const tooltippCN = classNames({
            "tooltip": true,
            "invisible": !this.state.hover
        })

        return (
            <div className="projectNavigation">
                <span className={tooltippCN}>
                    {projects[this.state.hoverElement].name} - {projects[this.state.hoverElement].date}
                </span>
                <div className="navigationWrapper">
                    <div onClick={(active === 0) ? onClick("click",max) : onClick("click", active-1)}>
                        <IoMdArrowBack />
                    </div>

                    {this.props.projects.map((p, i) => (
                        <div className="bullets"
                             onClick={onClick("click", i)}
                             onMouseEnter={() => this.handleMouse("enter", i)}
                             onMouseLeave={() => this.handleMouse("leave", i)}>
                            {(i === active) ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
                        </div>
                    ))}

                    <div onClick={(active === max) ? onClick("click",0) : onClick("click", active+1)}>
                        <IoMdArrowForward />
                    </div>
                </div>
                <div className="shuffle" onClick={this.props.onClick("click", this.random(0, max))}>
                    <IoMdShuffle />
                </div>
            </div>
        );
    }
}