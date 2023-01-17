import Head from 'next/head'

import { promises as fs } from 'fs'
import path from 'path'

import * as _ from "lodash";

import { GetStaticProps } from 'next'
import { Feed, Tag } from "../interfaces";
import ItemCard from "../components/itemCard";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ofTags } from "../utils/tags";
import { SearchBox } from "../components/searchBox";

let tags:{[name:string]: Tag} = {}

export const getStaticProps: GetStaticProps = async () => {
  const feedFile = path.join(process.cwd(), 'public', 'feed.json')
  const feedString = await fs.readFile(feedFile, 'utf8')
  // @ts-ignore
  const feed: Feed = JSON.parse(feedString)
  return {
    props: {feed}
  }
}

type Props = {
  feed: Feed
}

export default function Home({feed}: Props) {
  let router = useRouter();

  const [tags, ] = useState(() => {
    return _.keyBy(_.uniqBy(_.flatMap(feed.items, (item) => item.tags), (tag) => tag.name), (tag) => tag.name);
  })
  const [activeTags, setActiveTags] = useState(Array<Tag>());
  useEffect(() => {
    setActiveTags(ofTags(router.query, tags))
  }, [tags, router.query])
  const updateActiveTags = (tags: Tag[]) => {
    tags = _.uniqBy(tags, 'name');
    router.push({query: { tags: tags.map((tag) => tag.name) } })
  }
  const activeTagNames = useMemo(() => activeTags.map((tag?) => tag ? tag.name : ''), [activeTags]);

  let itemsToShow = useMemo(() => {
    return feed.items.filter(
        (item) => activeTags.length == 0 || (
            item.tags.filter((tag) => {
              return activeTagNames.indexOf(tag.name) != -1
            }).length == activeTags.length
        )
    )
  }, [activeTagNames, activeTags.length, feed.items]);

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <title>Christopher Mason</title>
        <meta name="description" content="Software engineering leader who is passionate about creating powerful and usable software that betters the human condition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/images/site.webmanifest"/>
      </Head>
        <div>
          <div>
            <SearchBox tags={tags} activeTags={activeTags} setActiveTags={updateActiveTags}/>
          </div>
          <ul className="summary-list">
            { itemsToShow.map((item) => (
              <ItemCard key={item.id} item={item} onTagClick={(tag) => updateActiveTags([...activeTags, tag])}/>
            ))}
          </ul>
        </div>
    </>
  )
}
