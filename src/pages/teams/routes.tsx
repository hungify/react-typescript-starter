import ErrorBoundary from '#/components/ErrorBoundary'
import { Route, Routes } from 'react-router-dom'
import Teams from '../teams/page'

export function TeamsRoutes() {
  return (
    <Routes>
      <Route index Component={Teams} errorElement={<ErrorBoundary />} />
    </Routes>
  )
}
