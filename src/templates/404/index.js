import React from "react"
import { Link } from "gatsby"

import { NotFoundPageTemplateWrapper } from "./index.style"

const NotFoundPageTemplate = () => {
    return (
        <NotFoundPageTemplateWrapper>
            <h1>not found - error 404</h1>
            <Link to="/">take me to the homepage </Link>
        </NotFoundPageTemplateWrapper>
    )
}

export default NotFoundPageTemplate
