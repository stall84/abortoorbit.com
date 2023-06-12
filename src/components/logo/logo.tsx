import { Link } from "gatsby";
import React from "react";
import "./logo.scss";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    return (
        <div className="logo">
            <Link to="/">
                <div className="inner">
                    <h1>
                        <span className="name">
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
                        </span>
                    </h1>
                </div>
            </Link>
        </div>
    )
}