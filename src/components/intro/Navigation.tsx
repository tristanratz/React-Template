import React from "react";

interface Props {
    accentColor: string
}

export class Navigation extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }


    render(): React.ReactElement| null | undefined {
        const wrapperStyle = {
            zIndex: 20,
            width: "75%",
            height: "25%",
            position: "absolute",
            fontSize: "2vh",
            bottom: 0,
            marginRight: "auto",
            marginLeft: "auto",
            overflow: "hidden",
        } as React.CSSProperties;

        const titleStyle = {
            background: "white",
            display: "inline-block",
            color: this.props.accentColor,
        } as React.CSSProperties;

        return (
            <div style={wrapperStyle}>
                <h3 style={titleStyle}>Tristan</h3>
                <h3 style={titleStyle}>Ratz</h3>
            </div>
        );
    }
}