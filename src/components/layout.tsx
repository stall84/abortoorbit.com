import React from "react";
import { Link } from "gatsby";
import NavComponent from "./nav-component";
import Footer from "./footer";



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