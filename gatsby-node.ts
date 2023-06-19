import path from "path";
import type { GatsbyNode } from "gatsby"

import { CreatePageQueryData } from "./src/types";

const blogPostTemplate = path.resolve(`src/templates/post-template.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql<CreatePageQueryData>(`
        query {
            allMdx {
                nodes {
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
            path: mdxNode.frontmatter.slug,
            component: `${blogPostTemplate}?__contentFilePath=${mdxNode.internal.contentFilePath}`,
            context: { id: mdxNode.id },
        })
    })
    reporter.info('*** createPages routine finished successfully ***')

}

