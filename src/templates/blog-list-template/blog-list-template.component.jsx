import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../../components/layout/layout.component"
import BlogCard from "../../components/Blog/blog-card/blog-card.component"
import Title from "../../components/title/title.component"

import styles from "../../components/Blog/blog.module.css"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const nextPage =
    numPages === currentPage
      ? `/blog/${currentPage}`
      : `/blog/${currentPage + 1}`
  const prevPage =
    currentPage === 2
      ? `/blogs`
      : currentPage === 1
      ? `/blogs`
      : `/blog/${currentPage - 1}`

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Previous
            </AniLink>
          )}
          {Array.from({ length: numPages }, (_, index) => {
            return (
              <AniLink
                key={index}
                fade
                to={index === 0 ? "/blogs" : `/blog/${index + 1}`}
                className={
                  index + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {index + 1}
              </AniLink>
            )
          })}
          {
            !isLast && (<AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>)
          }
        </section>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default BlogListTemplate
