//Este archivo se utiliza para crear páginas de forma programática y pasarles información. Es la lógica para las páginas template
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve(
        "./src/templates/tour-template/tour-template.component.jsx"
      ),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(
        "./src/templates/blog-template/blog-template.component.jsx"
      ),
      context: {
        slug: node.slug,
      },
    })
  })

  //amout of posts
  const posts = data.posts.edges

  //posts per page
  const postPerPage = 3

  //how many pages
  const numPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blog/${index + 1}`,
      component: path.resolve(
        "./src/templates/blog-list-template/blog-list-template.component.jsx"
      ),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
