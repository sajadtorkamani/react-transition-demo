import React, { useEffect } from 'react'

const PostsTab: React.FC = () => {
  const posts = []

  console.log('PostsTab: Rendering 5 posts')

  for (let i = 0; i < 5; i++) {
    posts.push(<SlowPostsTab key={i} index={i} />)
  }

  useEffect(() => {
    console.log('PostsTab: All posts rendered')
  }, [])

  return <ul>{posts}</ul>
}

const SlowPostsTab: React.FC<{ index: number }> = ({ index }) => {
  sleepSync(1000)

  console.log(`Post #${index + 1} ready to render`)

  return <li>Post #{index + 1}</li>
}

function sleepSync(milliseconds: number) {
  const start = Date.now()
  while (Date.now() - start < milliseconds) {
    // Busy-wait loop doing nothing
  }
}

export default PostsTab
