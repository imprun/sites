import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Gateway } from './pages/Gateway'
import { AIGateway } from './pages/AIGateway'
import { Functions } from './pages/Functions'
import { Scraping } from './pages/Scraping'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <NavBar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/ai-gateway" element={<AIGateway />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/scraping" element={<Scraping />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
