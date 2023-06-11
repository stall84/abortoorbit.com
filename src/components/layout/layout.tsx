import React from "react";
import { Link } from "gatsby";
import NavComponent from "../nav/nav";
import Footer from "../footer/footer";
import "./layout.scss";
import "normalize.css";



export default function Layout(props: any) {
    return (
        <div className="site-container">
            <div className="content-container">
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