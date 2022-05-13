import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AppRoutes } from "./routes"

function App() {
  return (
    <div >
      <Header/>
      <div className="outlet">
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
