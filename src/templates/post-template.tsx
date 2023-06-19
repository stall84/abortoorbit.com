import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link, } // Provide common components in an object here (passing gatsbys Link to all mdx components (provided for convenience))

export default function BlogPostTemplate(props: any): React.ReactComponentElement<any> {

    return <MDXProvider components={shortcodes}>{props.children}</MDXProvider>;

}