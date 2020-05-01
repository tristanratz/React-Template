import React from "react";
import "./style.scss"
import Fade from "react-reveal/Fade";

export class Card extends React.Component {

    render(): React.ReactElement {
        return (
            <div className="card">
                <Fade bottom>
                    {this.props.children}
                </Fade>
            </div>);
    }
}