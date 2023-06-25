import React from "react";
import { Link } from "gatsby"
// import { BlogListItemProps } from "../../types/page-components";
import "./blog-list-item.scss"

export type BlogListItemProps = {
    node: {
        frontmatter: {
            slug: string
            title: string
            date: string
            excerpt?: string
            description: string
            timeToRead?: number
            tags?: Array<{
                name: string
                slug: string
            }>
        }
    }
}



export default function BlogListItemComponent({ node }: BlogListItemProps): React.ReactComponentElement<any> {
    return (
        <>
            <div className="blog-list-item-box">
                {/* Reach's Router has some funky parsing happening within the 'to' attribute (object)..
                you can however use unix-like directory syntax.. here we use '.' for current route 'blog' */}
                <Link to={`.${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                </Link>
                <div className="blog-list-item-date-tags">
                    <time>{node.frontmatter.date}</time>
                    <>
                        {` - `}
                        {node.frontmatter.tags ? node.frontmatter.tags.map((tag) => <span>{tag.name}, </span>) : null}
                    </>
                </div>

            </div>
        </>
    )
}


            // <div className={`blog-listing-box ${className}`}>
            //     <a href={post.frontmatter.slug}>
            //       <h3>{post.frontmatter.title}</h3>
            //     </a>
            //     <div className="blog-listing-date-tags">
            //       <time>{new Date(post.frontmatter.date).toDateString()}</time>
            //       {showTags && post.frontmatter.tags ? post.frontmatter.tags.map((tag) => <span>{tag.name}</span>) : null}
            //     </div>
            //     <p>{post.frontmatter.description}</p>
            // </div>