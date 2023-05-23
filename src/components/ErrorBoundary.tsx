export default function ErrorBoundary({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <h1>Error Boundary</h1>
      {children}
    </div>
  )
}
