import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import AboutTab from './components/AboutTab'
import PostsTab from './components/PostsTab'

const Home: React.FC = () => {
  const [tab, setTab] = React.useState('about')

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Container>
        <div className="d-flex gap-3 mt-5 mb-3">
          <Button onClick={() => setTab('about')}>About</Button>
          <Button onClick={() => setTab('posts')}>Posts</Button>
        </div>

        {tab === 'about' && <AboutTab />}
        {tab === 'posts' && <PostsTab />}
      </Container>
    </>
  )
}

export default Home
