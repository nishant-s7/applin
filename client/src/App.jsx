import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
const App = () => {
  return (
    <section className="min-h-full w-full relative">
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default App;