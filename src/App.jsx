import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Textinho from "./pages/Textinho"
import Coracao from "./pages/Coracao"
import Listinha from "./pages/Listinha"
import Footer from "./components/Footer"
import Pagina404 from "./pages/404"
import Home from "./pages/Home"
function App() {
  //Oi lindaa ta olhando o código ?? I cat you :P

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Textinho'>
          <Textinho />
        </Route>
        <Route path='/coracao'>
          <Coracao />
        </Route>
        <Route path='/listinha'>
          <Listinha />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
