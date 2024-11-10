import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import Root from './components/Root'
import { ROUTES } from './lib/constants'
import WithTransitionExample from './routes/with-transition-example/WithTransitionExample'
import WithoutTransitionExample from './routes/without-transition-example/WithoutTransitionExample'

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

      <Route
        index
        element={<Navigate to={ROUTES.withoutTransitionExample} />}
      />

      <Route
        path="*"
        element={<Navigate to={ROUTES.withoutTransitionExample} />}
      />
    </Route>,
  ),
)
