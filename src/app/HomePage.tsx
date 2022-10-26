'use client'

import { Post } from './page'

const HomePage = ({ recentPosts }: any) => {
  return (
    <>
      {recentPosts.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  )
}

export default HomePage
