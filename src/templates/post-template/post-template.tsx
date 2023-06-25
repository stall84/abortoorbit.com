import React from "react"
import { Link, graphql, PageProps, HeadFC, HeadProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { PostTemplateDataProps } from "../../types/page-components"
import SEO from "../../components/seo";
import readingTime from "reading-time";
import { roundReadingTime } from "../../utils";
import "./post-template.scss"

const shortcodes = { Link, } // Provide common components in an object here (passing gatsbys Link to all mdx components (provided for convenience))

export default function BlogPostTemplate({ data, children }: PageProps<PostTemplateDataProps>): React.ReactComponentElement<any> {
    const { title, date, tags, description, slug, bannerImage } = data.mdx.frontmatter;
    const formattedDate = new Date(date).toDateString();
    return (
        <section className="blog-post-template-container">
            <h1>{title}</h1>
            <time>{formattedDate}</time>

            <hr />
            <br />
            <MDXProvider components={shortcodes} >
                {children}
            </MDXProvider>
        </section>
    )

}

export const Head: HeadFC<PostTemplateDataProps> = ({ data }) => (

    <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        pathname={data.mdx.frontmatter.slug}
        canonicalUrl={data.mdx.frontmatter.canonicalUrl ? data.mdx.frontmatter.canonicalUrl : undefined}
        image={data.mdx.frontmatter.bannerImage ? data.mdx.frontmatter.bannerImage?.childImageSharp?.resize?.src : undefined}
    />
)

export const query = graphql`
    query($slug: String!) { 
        mdx(frontmatter: {slug: { eq: $slug }}) {
            frontmatter {
                slug 
                title
                date
                description
                tags 
            }
        }

    }
`