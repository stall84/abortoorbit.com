import { Link } from "gatsby";
import React from "react";
import "./logo.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    const { siteTitle } = useSiteMetadata();
    return (
        <div className="logo">
            <Link to="/">

                {/* <span className="name">
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
                </span> */}
                <span className="name">
                    {siteTitle.split('').map((ele: string) => {
                        return <span className="letter">{ele}</span>
                    })}
                </span>

            </Link>
        </div>
    )
}