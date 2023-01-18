
export default function Footer({footerHtml}) {
  return <main dangerouslySetInnerHTML={{__html: footerHtml}}/>
}
