import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import NavbarMobile from './components/NavbarMobile'
import Navigation from './components/Navigation'
import { routes } from './config/routes'
import globalStyles from './styles/globalStyles.styles'

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
  </div>
)

// AppContent component to use useLocation hook
const AppContent = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: globalStyles.body.backgroundColor }}>
      {!isHomePage && <Navigation />}
      <NavbarMobile />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
