import { Link, useLocation } from 'react-router-dom'
import { getNavigationRoutes, getHomeRoute } from '../config/routes'
import geekLogo from '../assets/home/music-geek-logo.png';

const Navigation = () => {
  const location = useLocation()
  const homeRoute = getHomeRoute()
  const navRoutes = getNavigationRoutes()
  
  return (
    <nav className="shadow-lg sm:block flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {homeRoute && (
              <Link
                to={homeRoute.path}
                className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                title={homeRoute.description}
              >
                <img width={200} src={geekLogo} alt="" />
              </Link>
            )}
          </div>
          
          <div className="flex space-x-4">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`px-3 py-2 rounded-md text-sm font-medium hidden sm:block transition-colors ${
                  location.pathname === route.path
                    ? 'text-white bg-gray-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                title={route.description}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
