import classNames from "classnames";
import {
    IoMdDesktop,
    IoMdHammer,
    IoMdHeart,
    IoMdPin,
    IoMdSave
} from "react-icons/io";
import {
    AiFillCode
} from "react-icons/ai"
import {person} from "../../store/person";
import React from "react";
import {Card} from "./card";

interface Props {}

export const Aboutcards = (props: Props) => (
    <div className={classNames({"contentWrapper":true, "aboutCards":true})}>
        <Card>
            <IoMdPin />
            <label>Based in</label>
            <p>
                <strong>{person.city}</strong>{(person.locationHint) ? " " + person.locationHint : null},<br/>
                {person.state}, <br/>
                {person.country}
            </p>
        </Card>
        <Card>
            <IoMdHammer />
            <label>Preferred ides</label>
            <p>
                {person.preferredIdes.map((ide,i) => {
                    const last = i+1 ===  person.preferredIdes.length;
                    return (<text>{ide}{(!last) ? (<text>, </text>) : null}</text>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdHeart />
            <label>Interests</label>
            <p>
                {person.interests.map((interest,i) => {
                    const last = i+1 ===  person.interests.length;
                    return (<text>{interest}{(!last) ? (<text>, <br /></text>) : null}</text>)
                })}
            </p>
        </Card>
        <Card>
            <AiFillCode />
            <label>Technologies</label>
            <p>
                {person.favTec.map((tec,i) => {
                    const last = i+1 ===  person.favTec.length;
                    return (<text>{tec}{(!last) ? (<text>, </text>) : null}</text>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdDesktop />
            <label>Operating systems</label>
            <p>
                {person.operatingSystems.map((os,i) => {
                    const last = i+1 ===  person.operatingSystems.length;
                    return (<text>{os}{(!last) ? (<text>, </text>) : null}</text>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdSave />
            <label>Programs</label>
            <p>
                {person.programs.map((program,i) => {
                    const last = i+1 ===  person.programs.length;
                    return (<text>{program}{(!last) ? (<text>, </text>) : null}</text>)
                })}
            </p>
        </Card>
    </div>
);

export default Aboutcards;