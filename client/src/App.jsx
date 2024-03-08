import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
const App = () => {
  return (
    <section className="min-h-full w-full relative">
      <div className="top-0 sticky w-full">
        <Header />
      </div>

      <Outlet />

      <div className="w-full bottom-0 sticky">
        <Footer />
      </div>
    </section>
  )
}

export default App;