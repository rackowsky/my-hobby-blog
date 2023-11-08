import * as React from "react"
import Layout from "../components/layout"

import HeroTemplate from "../templates/index/hero"
import AboutMeTemplate from "../templates/index/about-me"
import MyBlogTemplate from "../templates/index/my-blog"
import ContactTemplate from "../templates/index/contact"
import QuoteTemplate from "../templates/index/quote"

const IndexPage = () => {
    return (
        <Layout>
            <HeroTemplate />
            <AboutMeTemplate />
            {/* <MyBlogTemplate />
            <ContactTemplate />
            <QuoteTemplate /> */}
        </Layout>
    )
}

export default IndexPage
