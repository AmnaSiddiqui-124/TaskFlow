import { BrowserRouter } from "react-router-dom"
import AppRoute from "./routes/AppRoute"
import Login from "./pages/auth/Login"

const App = () => {
  return (
   <BrowserRouter>
   <AppRoute/>
   </BrowserRouter>
  )
}

export default App