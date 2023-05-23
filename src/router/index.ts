import App from '#/App'
import { HomeRoutes } from '#/pages/home/routes'
import { TeamsRoutes } from '#/pages/teams/routes'

import { createBrowserRouter, type RouteObject } from 'react-router-dom'

export const routesDefinition: RouteObject[] = [
  {
    path: '*',
    Component: App,
    children: [
      {
        path: 'home',
        Component: HomeRoutes
      },
      {
        path: 'teams',
        Component: TeamsRoutes
      }
    ]
  }
]

const router = createBrowserRouter(routesDefinition)

export default router
