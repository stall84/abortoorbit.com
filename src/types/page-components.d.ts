// Types needed in components and/or pages.

export type BlogListItemProps = {
    post: {
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

export type PostTemplateDataProps = {
    mdx: {
        body?
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

export type UseSiteMetadataProps = {
    site: {
        siteMetadata: {
            siteTitle: string
            siteHeadline: string
            siteUrl: string
            siteDescription: string
            siteImage: string
            siteLanguage: string
            author: string
            [key: string]: unknown
        }
    }
}

export type SEOPageProps = {
    title?: string
    description?: string
    pathname?: string
    image?: string
    children?: React.ReactNode
    canonicalUrl?: string
}