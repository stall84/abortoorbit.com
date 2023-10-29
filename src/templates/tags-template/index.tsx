import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { PostTemplateDataProps } from '../post-template';

export default function TagsTemplate({ pageContext, data }: PageProps<any>): React.ReactComponentElement<any> {
    const { tag, count } = pageContext;
    const { edges } = data.allMdx;

    const tagHeader = `${count} post${count === 1 ? '' : 's'
        } tagged with "${tag}"`;

    return (
        <div>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter.slug
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>

            {/* <Link to="/tags">All tags</Link> */}
        </div>
    )
}

export const query = graphql`
    query($tag: String) { 
        allMdx(
            filter: { frontmatter: { tags: {elemMatch: {name: { in: [$tag] } }}}}
        ){
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        tags {
                            name
                            slug
                        }
                    }
                }
            }
            
        }

    }
`