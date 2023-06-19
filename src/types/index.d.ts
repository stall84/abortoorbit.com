// Types

export type IndexableObjectAny = {
    [key: string]: any;
}

export type CreatePageQueryData = {
    allMdx: {
        nodes: Array<{
            id: string,
            frontmatter: {
                slug: string,
                title: string,
                description: string,
            }
            internal: {
                conten?: any,
                contentDigest?: any,
                contentFilePath: string,
                type?: string,
            }
        }>
    }
}