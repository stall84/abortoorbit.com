import { Link } from "gatsby";
import React from "react";
import { logo, inner, name, letter } from "./logo.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    const { siteTitle } = useSiteMetadata();
    return (
        <div className={logo}>
            <Link to="/">
                <span className={name}>
                    {siteTitle.split('').map((ele: string) => {
                        return <span className={letter}>{ele}</span>
                    })}
                </span>
            </Link>
        </div>
    )
}