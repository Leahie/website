import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import remarkFrontmatter from 'remark-frontmatter'
import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Blogs({params}:{
    params:{
        slug: string[];
    };
}){
    const file = fs.readFileSync("src/(content)/"+params.slug[0]+".mdx" )

    const { content } = await compileMDX({
        source:file,
        options: { mdxOptions: {
            remarkPlugins: [[remarkFrontmatter]]
          } },
      })

    return(
        <>
        {content}
        </>
    )
}