import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <Container>
      <h1 className="mt-4 mb-4">{title}</h1>

      {children}
    </Container>
  </>
)

export default PageLayout
