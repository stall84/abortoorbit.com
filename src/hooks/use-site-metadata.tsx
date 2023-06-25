import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { UseSiteMetadataProps } from "../types/page-components";

export default function useSiteMetadata(): any {
    const data = useStaticQuery<UseSiteMetadataProps>(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                    siteUrl
                    siteHeadline
                    siteDescription
                    siteImage
                    siteLanguage
                    author
                }
            }
        }
    `);

    return data.site.siteMetadata;
}