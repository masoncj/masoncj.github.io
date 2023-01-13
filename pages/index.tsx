import Head from 'next/head'
import { Inter } from '@next/font/google'

import { promises as fs } from 'fs'
import path from 'path'

const inter = Inter({ subsets: ['latin'] })

import { GetStaticProps } from 'next'
import { Feed } from "../interfaces/feed";
import ItemCard from "../components/itemCard";
import React from "react";


export const getStaticProps: GetStaticProps = async () => {
  const feedFile = path.join(process.cwd(), 'public', 'feed.json')
  const feedString = await fs.readFile(feedFile, 'utf8')
  const feed: Feed = JSON.parse(feedString)
  return {
    props: {feed}
  }
}

type Props = {
  feed: Feed
}

export default function Home({feed}: Props) {
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
      <main className="main">
        { feed.items.map((item) => (
            <ItemCard key={item.id} item={item}/>
        ))}
      </main>
    </>
  )
}
