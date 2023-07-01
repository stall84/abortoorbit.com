import React from "react";


import "./blog-listing.scss"
import BlogListItemComponent from "../blog-list-item";

export type BlogListingProps = {
  nodes: Array<{
    frontmatter: {
      slug: string
      title: string
      date: string
      description: string
      excerpt?: string
      timeToRead?: number
      tags?: Array<{
        name: string
        slug: string
      }>
    }
  }>
  className?: string
  showTags?: boolean
}

export default function BlogListingComponent({ nodes, className = '', showTags = true }: BlogListingProps): React.ReactComponentElement<any> {

  return (
    <section className="blog-listing-section">
      {nodes.map((node) => {
        return (
          <BlogListItemComponent node={node} />
        )
      })}
    </section>
  )
}