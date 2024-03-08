import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;