/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `My Hobby Blog`,
        siteUrl: `https://my-hobby-blog.netlify.app/`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-X2VLH2YJCZ"],
                pluginConfig: {
                    head: true,
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/utils/imgs/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/utils/imgs/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
}
