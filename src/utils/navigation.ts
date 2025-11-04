import { routes, RouteConfig } from '../config/routes'

/**
 * Get the current page title based on the current path
 */
export const getPageTitle = (path: string): string => {
  const route = routes.find(r => r.path === path)
  return route ? `${route.name} - Music Geek` : 'Music Geek'
}

/**
 * Get the current page description for meta tags
 */
export const getPageDescription = (path: string): string => {
  const route = routes.find(r => r.path === path)
  return route ? route.description : 'Your ultimate destination for music theory and guitar learning'
}

/**
 * Check if a route is the current active route
 */
export const isActiveRoute = (routePath: string, currentPath: string): boolean => {
  if (routePath === '/') {
    return currentPath === '/'
  }
  return currentPath.startsWith(routePath)
}

/**
 * Get the next route in sequence (useful for pagination or guided tours)
 */
export const getNextRoute = (currentPath: string): RouteConfig | undefined => {
  const currentIndex = routes.findIndex(r => r.path === currentPath)
  if (currentIndex === -1 || currentIndex === routes.length - 1) {
    return undefined
  }
  return routes[currentIndex + 1]
}

/**
 * Get the previous route in sequence
 */
export const getPreviousRoute = (currentPath: string): RouteConfig | undefined => {
  const currentIndex = routes.findIndex(r => r.path === currentPath)
  if (currentIndex <= 0) {
    return undefined
  }
  return routes[currentIndex - 1]
}

/**
 * Get all routes except the current one (useful for related links)
 */
export const getOtherRoutes = (currentPath: string): RouteConfig[] => {
  return routes.filter(r => r.path !== currentPath)
}
