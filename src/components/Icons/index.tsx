import React from "react";
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoIosMail,
    IoLogoGithub
} from "react-icons/io"
import "./style.scss"


export class Icons extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <a href="https://www.instagram.com/tristan.ratz/"><IoLogoInstagram/></a>
                <a href="https://www.linkedin.com/in/tristan-ratz-a45680120"><IoLogoLinkedin/></a>
                <a href="mailto:mail@tristanratz.com"><IoIosMail/></a>
                <a href="https://github.com/tristanratz"><IoLogoGithub/></a>
                {/*<a>Medium</a>*/}
            </div>
        );
    }
}