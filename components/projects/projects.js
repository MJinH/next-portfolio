import React from 'react'
import Image from 'next/image'
import Link from "next/link";

export default function Projects({key,project}) {

  console.log(project)
  const imgUrl = project.cover.external.url
  const description = project.properties.Description.rich_text[0].plain_text
  const name = project.properties.Name.title[0].plain_text
  const startDate = project.properties.WorkPeriod.date.start
  const endDate = project.properties.WorkPeriod.date.end
  const link = project.properties.Link.rich_text[0].href
  const tags = project.properties.Tags.multi_select
  return (
    <>
        <div className="project-card flex flex-col p-6 m-3 rounded-xl bg-slate-100 dark:bg-slate-700">
            <Link href={link}>
                <div className="proejct-top cursor-pointer">
                    <Image
                        className="rounded-t-xl"
                        key={key} 
                        src={imgUrl}
                        alt="cover img"
                        width="100%"
                        height="50%"
                        layout="responsive"
                        objectFit='cover'
                        quality={100}
                    />
                </div>
            </Link>
            <div className="proejct-bottom flex flex-col pt-3">
                <span className="text-slate-500 dark:text-slate-300">{name}</span>
                <span className="text-slate-500 dark:text-slate-300">{description}</span>
                <div className="tags flex">
                    {tags.map((tag) => (
                        <span key={tag.id} className={`tag text-slate-500 dark:text-slate-300 px-1.5 mr-3 bg-sky-200 dark:bg-sky-600 rounded text-sm`}>{tag.name}</span>
                    ))}
                </div>
                <div className="flex">
                    <span className="text-slate-400 dark:text-slate-400">{startDate}</span>
                    <span className="text-slate-400 dark:text-slate-400 pl-3">{endDate}</span>
                </div>
            </div>
        </div>
    </>
  )
}
