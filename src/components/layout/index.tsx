import React from "react";
import { Link } from "gatsby";
import NavComponent from "../nav";
import Footer from "../footer";
import { siteContainer, contentContainer } from "./layout.module.scss";
import "normalize.css";



export default function Layout(props: any) {
    return (
        <div className={siteContainer}>
            <div className={contentContainer}>
                <header>
                    <NavComponent />
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}