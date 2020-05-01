import React from "react";
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoMdMail,
    IoLogoGithub,
    IoLogoXing,

} from "react-icons/io"
import {
    AiFillMediumSquare
} from "react-icons/ai"
import "./style.scss"
import {person} from "../../store/person";


export class Icons extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                {(person.linkedin) ? <a href={person.linkedin}><IoLogoLinkedin/></a> : null}
                {(person.instagram) ? <a href={person.instagram}><IoLogoInstagram/></a> : null}
                {(person.email) ? <a href={"mailto:" + person.email}><IoMdMail/></a> : null}
                {(person.github) ? <a href={person.github}><IoLogoGithub/></a> : null}
                {(person.xing) ? <a href={person.xing}><IoLogoXing/></a> : null}
                {(person.medium) ? <a href={person.medium}><AiFillMediumSquare/></a> : null}
                {/*<a>Medium</a>*/}
            </div>
        );
    }
}