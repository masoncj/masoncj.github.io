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
import Layout from "../components/layout";


import styles from './index.module.css'

let tags:{[name:string]: Tag} = {}

async function readPublicFile(filename: string): Promise<string> {
  const feedFile = path.join(process.cwd(), 'public', filename)
  return fs.readFile(feedFile, 'utf8')
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      feed: JSON.parse(await readPublicFile('feed.json')),
      headHtml: await readPublicFile('head_include.html'),
      headerHtml: await readPublicFile('header_include.html'),
      footerHtml: await readPublicFile('footer_include.html'),
    }
  }
}

type Props = {
  feed: Feed,
  headHtml: string,
  headerHtml: string,
  footerHtml: string,
}

export default function Home({feed, headHtml, headerHtml, footerHtml}: Props) {
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
    return _.orderBy(feed.items.filter(
        (item) => activeTags.length == 0 || (
            item.tags.filter((tag) => {
              return activeTagNames.indexOf(tag.name) != -1
            }).length == activeTags.length
        )
    ), ['date_published'], ['desc'])
  }, [activeTagNames, activeTags.length, feed.items]);

  return (
    <Layout headHtml={headHtml} headerHtml={headerHtml} footerHtml={footerHtml}>
      <Head>
        <title>Christopher Mason</title>
      </Head>
      <div className={styles.searchBox}>
        <SearchBox tags={tags} activeTags={activeTags} setActiveTags={updateActiveTags}/>
      </div>
      <ul className="summary-list">
        {itemsToShow.map((item) => (
            <ItemCard key={item.id} item={item} onTagClick={(tag) => updateActiveTags([...activeTags, tag])}/>
        ))}
      </ul>
    </Layout>
  )
}
