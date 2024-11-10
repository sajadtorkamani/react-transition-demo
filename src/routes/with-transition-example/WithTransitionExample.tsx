import React, { useState, useTransition } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'

import PageLayout from '../../components/PageLayout'
import AboutTab from '../../components/tabs/AboutTab'
import ContactTab from '../../components/tabs/ContactTab'
import PostsTab from '../../components/tabs/PostsTab'

const WithoutTransitionExample: React.FC = () => {
  const [tab, setTab] = useState('about')
  const [isPending, startTransition] = useTransition()

  console.log({ isPending })

  return (
    <PageLayout title="With Transition Example">
      <Alert variant="success" className="mb-4">
        <>
          Click on the 'Posts (slow)' tab and then click on the 'Contacts' tab.
          You'll notice that the UI doesn't get blocked and the 'Contacts' tab
          shows immediately.
        </>
      </Alert>

      <div className="d-flex gap-3 mb-3">
        <Button onClick={() => setTab('about')}>About</Button>
        <Button
          className="d-flex gap-2 align-items-center"
          onClick={() => {
            startTransition(() => {
              setTab('posts')
            })
          }}
        >
          Posts (slow)
          {isPending && <Spinner size="sm" />}
        </Button>
        <Button onClick={() => setTab('contacts')}>Contacts</Button>
      </div>

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contacts' && <ContactTab />}
    </PageLayout>
  )
}

export default WithoutTransitionExample
