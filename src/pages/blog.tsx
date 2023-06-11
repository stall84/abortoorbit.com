import React from "react";

export default function NavComponent(props: any): React.ReactComponentElement<any> {
    return (
        <div>
            <h1>BLOG</h1>
            <div>
                <button type="button">
                    <a href="/">Home</a>
                </button>
            </div>
        </div>
    )
}