import React from "react"
import { Link, graphql, PageProps, HeadFC, HeadProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
// import { PostTemplateDataProps } from "../../types/page-components"
import SEO from "../../components/seo";
import readingTime from "reading-time";
import { roundReadingTime } from "../../utils";
import { blogPostTemplateContainer, blogPostTemplateTitlebox, blogPostTemplateProvider } from "./post-template.module.scss"

export type PostTemplateDataProps = {
    allMdx: {
        totalCount: number
        edges: Array<{
            node: any
        }>
    }
    mdx: {
        body?: string
        frontmatter: {
            slug: string
            title: string
            date: string
            description: string
            excerpt?: string
            timeToRead?: number
            canonicalUrl?: string
            bannerImage?: {
                childImageSharp: {
                    resize: {
                        src: string
                    }
                }
            }
            tags?: Array<{
                name: string
                slug: string
            }>
        }
    }
}

const shortcodes = { Link, } // Provide common components in an object here (passing gatsbys Link to all mdx components (provided for convenience))

export default function BlogPostTemplate({ data, children }: PageProps<PostTemplateDataProps>): React.ReactComponentElement<any> {
    const { title, date, tags, description, slug, bannerImage } = data.mdx.frontmatter;

    return (
        <section className={blogPostTemplateContainer}>
            <div className={blogPostTemplateTitlebox}>
                <div className="page-h1-wrapper">
                    <h1>{title}</h1>
                </div>
                <time>{date}</time>
            </div>

            <div className={blogPostTemplateProvider}>
                <MDXProvider components={shortcodes} >
                    {children}
                </MDXProvider>
            </div>
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
                date(formatString: "MM-DD-YYYY")
                description
                tags {
                    name
                    slug
                }
            }
        }

    }
`