import path from "path";
import readingTime from "reading-time";
import type { GatsbyNode } from "gatsby"

import { CreatePageQueryData } from "./src/types/node-types";

import { slugifyFunc } from "./src/utils";

const blogPostTemplate = path.resolve(`src/templates/post-template/post-template.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql<CreatePageQueryData>(`
        query {
            allMdx {
                nodes {
                    body
                    id
                    frontmatter {
                        slug
                        title
                    } 
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    if (result.errors || !result.data) {
        reporter.panicOnBuild(`*** ERROR loading MDX 'result': ***`, result.errors)
        return;
    }

    const { allMdx } = result.data


    reporter.info('*** GraphQL node query successful. Beginning createPages routine... ***')

    allMdx.nodes.forEach((mdxNode) => {
        createPage({
            path: `blog${mdxNode.frontmatter.slug}`,
            component: `${blogPostTemplate}?__contentFilePath=${mdxNode.internal.contentFilePath}`,
            context: { slug: mdxNode.frontmatter.slug },
        })
    })
    reporter.info('*** createPages routine finished successfully ***')

}

