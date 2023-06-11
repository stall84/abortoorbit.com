import { Link } from "gatsby";
import React from "react";

export default function LogoComponent(props: any): React.ReactComponentElement<any> {
    return (
        <div className="logo">
            <Link to="/">
                <h1>LOGO</h1>
            </Link>
        </div>
    )
}