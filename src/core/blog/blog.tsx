import React from "react";

import { logo, title } from "./blog.module.scss";

export default function BlogCoreComponent(props: any): React.ReactComponentElement<any> {

    return (
        <>
            <div className={`${title}`}>

                CORE BLOG

            </div>
        </>
    )
}