import HTMLReactParser from "html-react-parser";
import Head from "next/head";
import React from "react";


type Props = {
  headHtml: string,
  headerHtml: string
}

export default function Header({headHtml, headerHtml}: Props) {
  return <>
    <Head>{HTMLReactParser(headHtml)}</Head>
    <main dangerouslySetInnerHTML={{__html: headerHtml}} />
  </>
}
