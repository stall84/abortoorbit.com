// Types needed in gatsby-node and/or source-creation or schema-altering locations

export type IndexableObjectAny = {
    [key: string]: any;
}

// Add properties to the 'MdxNode' type as needed
export type MdxNode = {
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
}

export type CreatePageQueryData = {
    allMdx: {
        edges: Array<{
            node: MdxNode
        }>
        // nodes is an abstraction of edges[nodes] but limits the graphing between similar topics. 
        // use below 'nodes' for simplest querying where no association or relation needed
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
