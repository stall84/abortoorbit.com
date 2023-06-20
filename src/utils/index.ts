type slugify = (
    source: {
        slug?: string;
        title: string;
    },
    basePath: string
) => string;

export const slugifyFunc: slugify = (source, basePath) => {

    const postfix = source.slug ? source.slug : (source.title.replace(/\s+/g, '-').toLowerCase())

    return `/${basePath}/${postfix}`.replace(/\/\/+/g, "/")
}