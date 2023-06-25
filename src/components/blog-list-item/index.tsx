import React from "react";
import { Link } from "gatsby"
import { BlogListItemProps } from "../../types/page-components";
import "./blog-list-item.scss"



export default function BlogListItemComponent({ post }: BlogListItemProps): React.ReactComponentElement<any> {
    return (
        <div className="blog-list-item-box">
            <Link to={post.slug}>
                {post.title}
            </Link>
        </div>
    )
}