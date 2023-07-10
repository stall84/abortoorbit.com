import { Link } from "gatsby";
import React from "react";
import { logo, name, letter, mobileLogo } from "./logo.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    const { siteTitle } = useSiteMetadata();
    return (
        <>
            <div className={logo}>
                <Link to="/">
                    <span className={name}>
                        {siteTitle.split('').map((ele: string) => {
                            return <span className={letter}>{ele}</span>
                        })}
                    </span>
                </Link>
            </div>
            <div className={mobileLogo}>
                <Link to="/">
                    <span >ATO</span>
                </Link>
            </div>
        </>

    )
}