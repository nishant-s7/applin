import { Link } from "react-router-dom"
const App = () => {
  return (
    <>
      <h1 className="text-color1">Hello, World!</h1>
      <Link className="rounded-lg h-40 w-40" to='/temp'>Temp</Link>
    </>
  )
}

export default App
