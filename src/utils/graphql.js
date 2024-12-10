// define the website url with the graphql endpoint here
const websiteUrl = 'https://drericaperez.com/blog/graphql'

export async function getPost(slug) {
    try {
        const res = await fetch(websiteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query GetPost($slug: String!) {
                        postBy(slug: $slug) {
                            date
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                            title
                            content
                        }
                    }
                `,
                variables: { slug }
            })
        })

        const data = await res.json()

        if (data.errors) {
            console.error('GraphQL errors:', data.errors)
            return []
        }

        return data.data.postBy
        
    } catch (error) {
        console.error('Error fetching site settings:', error)
        return null
    }
}

export async function getPosts(categoryName = "Featured") {
    try {
        const res = await fetch(websiteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query GetPosts($categoryName: String!) {
                        posts(where: {categoryName: $categoryName}) {
                            edges {
                                node {
                                    title
                                    slug
                                    featuredImage {
                                        node {
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    categoryName
                }
            })
        })

        const data = await res.json()

        if (data.errors) {
            console.error('GraphQL errors:', data.errors)
            return []
        }

        return data.data.posts.edges.map(edge => edge.node)
        
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}