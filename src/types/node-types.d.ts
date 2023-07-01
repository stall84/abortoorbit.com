// Types needed in gatsby-node and/or source-creation or schema-altering locations

export type IndexableObjectAny = {
    [key: string]: any;
}

export type CreatePageQueryData = {
    allMdx: {
        nodes: Array<{
            id: string
            body: string
            frontmatter: {
                slug: string
                title: string
                description: string
            }
            internal: {
                content?: any
                contentDigest?: any
                contentFilePath: string
                type?: string
            }
        }>
    }
}
