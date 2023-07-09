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
            <div className="page-h1-wrapper">
              <h1>Welcome to the Abort To Orbit Blogsite</h1>
            </div>


          </div>
          <p> This is very much a work in progress. For now, check out the <Link to="/blog">Blog</Link></p>
        </section>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
