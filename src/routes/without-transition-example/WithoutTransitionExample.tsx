import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

import PageLayout from '../../components/PageLayout'
import AboutTab from '../../components/tabs/AboutTab'
import ContactTab from '../../components/tabs/ContactTab'
import PostsTab from '../../components/tabs/PostsTab'

const WithoutTransitionExample: React.FC = () => {
  const [tab, setTab] = useState('about')

  return (
    <PageLayout title="Without Transition Example">
      <Alert variant="danger" className="mb-4">
        <>
          Click on the 'Posts (slow)' tab and then click on the 'Contacts' tab.
          You'll notice that the UI becomes blocked for about ~5 seconds and
          then 'Contacts' tab shows.
        </>
      </Alert>

      <div className="d-flex gap-3 mb-3">
        <Button onClick={() => setTab('about')}>About</Button>
        <Button onClick={() => setTab('posts')}>Posts (slow)</Button>
        <Button onClick={() => setTab('contacts')}>Contacts</Button>
      </div>

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contacts' && <ContactTab />}
    </PageLayout>
  )
}

export default WithoutTransitionExample
