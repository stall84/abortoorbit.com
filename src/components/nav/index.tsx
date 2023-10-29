import React, { ReactComponentElement, useEffect, useRef, useState } from 'react'
import { HeadFC, Link, PageProps } from "gatsby"
import { globalHistory } from "@reach/router"
import LogoComponent from '../logo';
import {
    navComponent,
    navList,
    navItem,
    mobileNavComponent,
    mobileNavList,
    mobileNavItem,
    mobileNavOverlayContainer,
    mobileNavMenu,
} from "./nav.module.scss";

export default function NavComponent(props: PageProps): ReactComponentElement<any> {
    const { location } = props;
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavRef = useRef<{ location: unknown }>({ location: null });


    useEffect(() => {
        if (!mobileNavRef.current.location) {
            mobileNavRef.current.location = location;
        }
        else if (mobileNavRef.current.location != location) {
            setIsOpen(false);
        }
    }, [location])

    return (
        <>
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
            <nav ref={mobileNavRef} className={mobileNavComponent}>
                <div className={mobileNavMenu}>
                    <li >
                        <LogoComponent />
                    </li>
                    <li className={mobileNavItem}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <XSvg /> : <MenuSvg />}

                        </button>
                    </li>

                </div>

                {isOpen && (
                    <div className={mobileNavOverlayContainer}>
                        <ul className={mobileNavList}>
                            <li className={mobileNavItem}>
                                <Link to="/">HOME</Link>
                            </li>
                            <li className={mobileNavItem}>
                                <Link to="/blog">BLOG</Link>
                            </li>
                            <li className={mobileNavItem}>
                                <Link to="/about">ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </nav>
        </>

    )
}

export const MenuSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>)

export const XSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)