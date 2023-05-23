import { Route, Routes, useRoutes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/default'
import { routesDefinition } from './router'

export default function App() {
  const CurrentLayout = DefaultLayout

  const routes = useRoutes(routesDefinition)

  return routes
}
