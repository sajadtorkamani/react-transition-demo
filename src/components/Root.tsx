import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Root: React.FC = () => (
  <>
    <Header />
    <div className="main-content">
      <Outlet />
    </div>
    <Footer />
  </>
)

export default Root
