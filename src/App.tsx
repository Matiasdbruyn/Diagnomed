import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Index } from "./pages/inicio/Index";
import { ScrollToTop } from './ScrollToTop';
import { Especialidades } from './pages/especialidades/Especialidades'



function App() {

  return (
    <BrowserRouter basename="/Diagnomed">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/especialidades" element={<Especialidades />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
