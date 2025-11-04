import { useLocation } from 'react-router-dom'
import { getBreadcrumbs } from '../config/routes'

const Breadcrumbs = () => {
  const location = useLocation()
  const breadcrumbs = getBreadcrumbs(location.pathname)
  
  if (breadcrumbs.length === 0) return null
  
  return (
    <nav className="text-sm text-gray-400 mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <span className="hover:text-gray-300">🏠</span>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.path} className="flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-blue-400 font-medium">
              {breadcrumb.icon} {breadcrumb.name}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
