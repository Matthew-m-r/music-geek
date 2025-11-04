// White Tailwind burger menu for mobile
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getNavigationRoutes } from '../config/routes'

const NavbarMobile = () => {
    const [open, setOpen] = useState(false)
    const navRoutes = getNavigationRoutes()

    return (
        <nav className="block sm:hidden shadow-lg relative z-50">
            <div className="flex items-center justify-between px-4 py-3">
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 rounded-full focus:outline-none bg-white"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 rounded-sm ${open ? 'rotate-45 translate-y-1.5' : ''}`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 rounded-sm my-1 ${open ? 'opacity-0' : ''}`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 rounded-sm ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
                    ></span>
                </button>
            </div>
            <div
                className={`
                    w-full bg-white px-4 py-6 shadow-2xl space-y-1 absolute left-0 top-full z-40
                    transition-all duration-500 ease-in-out
                    ${open ? 'opacity-100 translate-y-0 pointer-events-auto h-[100vh]' : 'opacity-0 -translate-y-10 pointer-events-none h-0'}
                `}
                style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                }}
            >
                {open && navRoutes.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        className="block px-3 py-2 rounded-md font-medium text-black hover:bg-white transition-colors text-2xl"
                        title={route.description}
                        onClick={() => setOpen(false)}
                    >
                        <span className="mr-2">{route.icon}</span>
                        {route.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default NavbarMobile;