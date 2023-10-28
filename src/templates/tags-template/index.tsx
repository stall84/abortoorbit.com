import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { PostTemplateDataProps } from '../post-template';

export default function TagsTemplate({ pageContext, data }: PageProps<PostTemplateDataProps>) {
    const { title, date, tags, description, slug, bannerImage } = data.mdx.frontmatter;

    const { edges, totalCount } = data.allMdx
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'
        } tagged with "${tags?.[0]}"`;

    return (
        <div>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/tags">All tags</Link>
        </div>
    )
}