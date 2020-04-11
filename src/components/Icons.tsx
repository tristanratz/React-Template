import React from "react";


export class Icons extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <a>Instagram</a>
                <a>LinkedIn</a>
                <a>Mail</a>
                <a>GitHub</a>
                <a>Medium</a>
            </div>
        );
    }
}