import React from 'react';
import Layout from './src/components/layout/layout';
import './src/styles/global.scss';

export function wrapPageElement({ element, props }) {

    return (
        <Layout {...props}>
            {element}
        </Layout>
    )
};

// PreLoad 'Local' Fonts
export function onRenderBody({ setHeadComponents }) {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Roboto-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="robotoRegFont"
        />
    ])
}