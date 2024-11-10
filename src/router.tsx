import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
} from 'react-router-dom'

import Root from './components/Root'
import { ROUTES } from './lib/constants'
import WithTransitionExample from './routes/with-transition-example/WithTransitionExample'
import WithoutTransitionExample from './routes/without-transition-example/WithoutTransitionExample'

const FallbackRoute: React.FC = () => {
  const navigate = useNavigate()

  navigate(ROUTES.withoutTransitionExample)

  return null
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path={ROUTES.withoutTransitionExample}
        element={<WithoutTransitionExample />}
      />

      <Route
        path={ROUTES.withTransitionExample}
        element={<WithTransitionExample />}
      />

      <Route path="*" element={<FallbackRoute />} />
    </Route>,
  ),
)
