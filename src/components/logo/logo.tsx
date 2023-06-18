import { Link } from "gatsby";
import React from "react";
import "./logo.scss";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    return (
        <div className="logo">
            <Link to="/">
                {/* <div className="inner"> */}

                <span className="name">
                    <span className="letter m">M</span>
                    <span className="letter i">I</span>
                    <span className="letter c">C</span>
                    <span className="letter h">H</span>
                    <span className="letter a">A</span>
                    <span className="letter e">E</span>
                    <span className="letter l">L</span>
                    <span> </span>
                    <span> </span>
                    <span className="letter s">S</span>
                    <span className="letter t">T</span>
                    <span className="letter a2">A</span>
                    <span className="letter l2">L</span>
                    <span className="letter l3">L</span>
                    <span className="letter i2">I</span>
                    <span className="letter n">N</span>
                    <span className="letter g">G</span>
                    <span className="letter s2">S</span>
                </span>

                {/* <span className="name">
                    <span className="letter m">m</span>
                    <span className="letter i">i</span>
                    <span className="letter c">c</span>
                    <span className="letter h">h</span>
                    <span className="letter a">a</span>
                    <span className="letter e">e</span>
                    <span className="letter l">l</span>
                    <span> </span>
                    <span className="letter s">s</span>
                    <span className="letter t">t</span>
                    <span className="letter a2">a</span>
                    <span className="letter l2">l</span>
                    <span className="letter l3">l</span>
                    <span className="letter i2">i</span>
                    <span className="letter n">n</span>
                    <span className="letter g">g</span>
                    <span className="letter s2">s</span>
                </span> */}
                {/* <div className="logo-box"> */}
                {/* <span className="name">
                        <span className="letter m">M</span>
                        <span className="letter s">S</span>
                    </span> */}
                {/* </div> */}
                {/* <span className="name">
                        <span className="letter m">m</span>
                        <span className="letter s">s</span>
                    </span> */}

                {/* </div> */}
            </Link>
        </div>
    )
}