import React, { ReactComponentElement } from 'react'
import { HeadFC, Link, PageProps } from "gatsby"
import LogoComponent from '../logo';
import { navComponent, navList, navItem } from "./nav.module.scss";

export default function NavComponent(props: any): ReactComponentElement<any> {

    return (
        <nav className={navComponent}>
            <ul className={navList}>
                <li className={navItem}>
                    <LogoComponent />
                </li>
                <li className={navItem}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={navItem}>
                    <Link to="/blog">BLOG</Link>
                </li>
                <li className={navItem}>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}