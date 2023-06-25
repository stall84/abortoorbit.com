import React from "react";
import "../styles/about-page.scss"
export default function NavComponent(props: any): React.ReactComponentElement<any> {
    return (
        <>
            <section className="about-main-section">
                <div className="about-title-section-box">
                    <div className="page-h1-wrapper">
                        <h1 >UNDER CONSTRUCTION </h1>
                    </div>
                </div>
                <p>
                    If you'd like to see my (very old by this point) portfolio site, head over to <a href="https://michaelstallings.net">michaelstallings.net</a>
                </p>
            </section>
        </>
    )
}