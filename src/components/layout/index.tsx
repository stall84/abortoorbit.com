import React from "react";
import { Link, PageProps } from "gatsby";
import NavComponent from "../nav";
import Footer from "../footer";
import { siteContainer, contentContainer } from "./layout.module.scss";
import "normalize.css";



export default function Layout(props: PageProps) {
    return (
        <div className={siteContainer}>
            <div className={contentContainer}>
                <header>
                    <NavComponent {...props} />
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