import { lazy } from 'react'

export interface RouteConfig {
  path: string
  name: string
  component: React.ComponentType
  description: string
  icon?: string
  exact?: boolean
  protected?: boolean
}

// Lazy load components for better performance
const HomePage = lazy(() => import('../pages/Home.page'))
const GuitarGeekPage = lazy(() => import('../pages/GuitarGeek.page'))
const TheoryGeekPage = lazy(() => import('../pages/TheoryGeek.page'))

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    description: 'Welcome to Music Geek - Your ultimate destination for music theory and guitar learning',
    icon: '🏠',
    exact: true
  },
  {
    path: '/guitar',
    name: 'Guitar Geek',
    component: GuitarGeekPage,
    description: 'Master guitar techniques, learn chords, scales, and improve your playing skills',
    icon: '🎸'
  },
  {
    path: '/theory',
    name: 'Theory Geek',
    component: TheoryGeekPage,
    description: 'Dive deep into music theory, understand harmony, rhythm, and composition',
    icon: '🎼'
  }
]

// Helper function to get route by path
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path)
}

// Helper function to get route by name
export const getRouteByName = (name: string): RouteConfig | undefined => {
  return routes.find(route => route.name === name)
}

// Helper function to check if a path is valid
export const isValidPath = (path: string): boolean => {
  return routes.some(route => route.path === path)
}

// Navigation breadcrumbs helper
export const getBreadcrumbs = (currentPath: string): RouteConfig[] => {
  const breadcrumbs: RouteConfig[] = []
  let currentRoute = getRouteByPath(currentPath)
  
  if (currentRoute) {
    breadcrumbs.push(currentRoute)
  }
  
  return breadcrumbs
}

// Get all navigation routes (excluding home for special handling)
export const getNavigationRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.path !== '/')
}

// Get home route specifically
export const getHomeRoute = (): RouteConfig | undefined => {
  return routes.find(route => route.path === '/')
}
