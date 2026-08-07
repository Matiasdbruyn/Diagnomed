import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Index } from "./pages/inicio/Index";
import { ScrollToTop } from './ScrollToTop';



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
