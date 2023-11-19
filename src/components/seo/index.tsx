import React from "react";
import { withPrefix } from "gatsby";
import useSiteMetadata from "../../hooks/use-site-metadata";
import { SEOPageProps } from "../../types/page-components";

export default function SEOComponent({
    title = '',
    description = '',
    image = '',
    pathname = '',
    children = null,
    canonicalUrl = '',
}: SEOPageProps): React.ReactComponentElement<any> {

    const siteMetaObj = useSiteMetadata();

    const {
        siteTitle,
        siteUrl,
        siteHeadline,
        siteDescription,
        siteImage,
        siteLanguage,
        author,
    } = siteMetaObj;

    const aggregateSEO = {
        title: title ? `${title} | ${siteTitle}` : siteTitle,
        description: description || siteDescription,
        url: `${siteUrl}${pathname || ''}`,
        image: `${siteUrl}${image || siteImage}`,
    }

    return (
        <>
            <html lang={siteLanguage} />
            <title>{aggregateSEO.title}</title>
            <meta name="description" content={aggregateSEO.description} />
            <meta name="image" content={aggregateSEO.image} />
            <meta property="og:title" content={aggregateSEO.title} />
            <meta property="og:url" content={aggregateSEO.url} />
            <meta property="og:description" content={aggregateSEO.description} />
            <meta property="og:image" content={aggregateSEO.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:alt" content={aggregateSEO.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={aggregateSEO.title} />
            <meta name="twitter:url" content={aggregateSEO.url} />
            <meta name="twitter:description" content={aggregateSEO.description} />
            <meta name="twitter:image" content={aggregateSEO.image} />
            <meta name="twitter:image:alt" content={aggregateSEO.description} />
            <meta name="twitter:creator" content={author} />
            <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-minimal-blog" />
            <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
            <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
            <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
            <meta name="viewport" content="width=device-width" />
            {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
            {children}
        </>
    )
}