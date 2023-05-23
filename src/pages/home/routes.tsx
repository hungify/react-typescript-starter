import { Route } from 'react-router-dom'

export function HomeRoutes() {
  return (
    <Route>
      <Route path='/' element={<div>Home</div>} />
    </Route>
  )
}
