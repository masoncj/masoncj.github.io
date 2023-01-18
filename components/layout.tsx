import Header from "./header";
import Footer from "./footer";


export default function Layout({headHtml, headerHtml, children, footerHtml}) {
  return (
      <>
        <Header headHtml={headHtml} headerHtml={headerHtml}/>
        <div className="page-content">
          <div className="wrapper">
            {children}
          </div>
        </div>
        <Footer footerHtml={footerHtml}/>
      </>
  )
}
