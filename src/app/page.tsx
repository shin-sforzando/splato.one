import HomePage from '@/app/HomePage'

export type Post = {
  id: number
  title: string
}

const getPosts = async () => {
  const posts = [{ id: 1, title: 'Hello World' }]
  return posts
}

export default async function Page() {
  const recentPosts = await getPosts()
  return <HomePage recentPosts={recentPosts} />
}
