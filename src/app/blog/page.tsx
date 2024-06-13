
import { Montserrat } from "next/font/google";
import Heading from "@/(components)/Heading"
import Box from "./Box"
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import remarkFrontmatter from 'remark-frontmatter'
import { compileMDX } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { motion } from "framer-motion";
import Socials from "@/(components)/Socials";


interface post{
  link: string,
  title: string, 
  date: string, 
  snippet: string,
  slug: string;
}

interface front{
  link: string,
  title: string, 
  date: string, 
  snippet: string,
}

export default async function Page() {
  let posts:post[] = await getAllPostsMeta()
    return(
      <div className='Blog'>
        <div className='mt-[5%] mx-[5%] flex  h-fit mb-[7%]'>
          <div className="w-[50%]">
          <Heading name="Notes"/>


          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {posts.map(e => (
          <Link href = {e.link} key={e.title}> 
            <Box title={e.title} date={ e.date} snippet={e.snippet}/>
          </Link>))}
        </div>
      </div>
    )
    
  }



const getAllPostsMeta = async() =>{
  const files = fs.readdirSync('src/(content)')

  let posts:post[] = []

  for(const file of files){
    const {meta} = await getPost(file)
    posts.push(meta)
  }
  return posts;
}

async function getPost(slug: string){
  const realSlug = slug.replace(/\.mdx$/,'')
  const filePath = "src/(content)/"+slug 
  const file = fs.readFileSync(`src/(content)/${realSlug}.mdx`)

  const { content, frontmatter }:{content: object, frontmatter:front} = await compileMDX({
      source:file,
      options: {parseFrontmatter: true, mdxOptions: {
          remarkPlugins: [[remarkFrontmatter]]
        } },
    })
    return{meta: {...frontmatter, slug:realSlug}, content}
}

