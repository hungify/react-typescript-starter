import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <header>
        <h1>Vite + React + Typescript + Starter</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>©️ me {new Date().getFullYear()}</footer>
    </>
  )
}
