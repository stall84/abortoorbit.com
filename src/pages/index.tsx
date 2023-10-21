import * as React from "react"
import { HeadFC, PageProps, Link } from "gatsby"
import NavComponent from "../components/nav"
import "../styles/home-page.scss"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div>
        <section className="home-main-section">
          <div className="home-title-section-box">
            <h1>Welcome to the Abort To Orbit Blogsite</h1>
          </div>
          <p> This is very much a work in progress. For now, check out the <Link to="/blog">Blog Listings</Link></p>
        </section>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Abort To Orbit</title>
