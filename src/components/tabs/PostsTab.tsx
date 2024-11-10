import React from 'react'

const PostsTab: React.FC = () => {
  const posts = []

  for (let i = 0; i < 5; i++) {
    posts.push(<SlowPostsTab key={i} index={i} />)
  }

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
