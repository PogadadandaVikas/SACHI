import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Skeleton from './components/Skeleton'

const Home = lazy(() => import('./pages/Home'))
const Speakers = lazy(() => import('./pages/Speakers'))
const Nominate = lazy(() => import('./pages/Nominate'))
const PastEvents = lazy(() => import('./pages/PastEvents'))

function App() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-20">
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-6 py-16">
              <div className="grid gap-6 md:grid-cols-2">
                <Skeleton className="h-48" />
                <Skeleton className="h-48" />
                <Skeleton className="h-48" />
                <Skeleton className="h-48" />
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/nominate" element={<Nominate />} />
            <Route path="/past-events" element={<PastEvents />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
