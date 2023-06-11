import React from "react";
import { Link } from "gatsby";
import NavComponent from "../nav/nav";
import Footer from "../footer/footer";
import "./layout.scss";
import "normalize.css";



export default function Layout(props: any) {
    return (
        <div>
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
    )
}