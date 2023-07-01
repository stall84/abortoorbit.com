import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogListingComponent from "../components/blog-listing";
import "../styles/blog.scss"


export default function NavComponent(props: any): React.ReactComponentElement<any> {
    const postNodes = useStaticQuery(graphql`
        query { 
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        date(formatString: "M-DD-YYYY")
                        description
                        title
                        tags {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `)
    const blogPosts = postNodes.allMdx.nodes;
    return (
        <>
            <section className="blog-section">
                <div className="page-h1-wrapper">
                    <h1> Blog Listings </h1>
                </div>
                <BlogListingComponent nodes={blogPosts} />
            </section>
        </>
    )
}
