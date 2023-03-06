interface ICounterProps {
  count: number
}

function Counter({ count }: ICounterProps) {
  return (
    <div>
      <h1>Counter {count}</h1>
    </div>
  )
}

export default Counter
