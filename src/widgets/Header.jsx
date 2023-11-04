import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="py-4 border-b">
      <nav className="container mx-auto flex items-center justify-center h-full gap-1 sm:gap-2 lg:gap-3 sm:text-lg">
        <NavLink
          className={({ isActive }) =>
            `decoration-2 underline-offset-1 hover:underline ${
              isActive && "underline decoration-orange-400  text-orange-500"
            }`
          }
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `decoration-2 underline-offset-1 hover:underline ${
              isActive && "underline decoration-orange-400  text-orange-500"
            }`
          }
          to="/schedule"
        >
          Расписание
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `decoration-2 underline-offset-1 hover:underline ${
              isActive && "underline decoration-orange-400  text-orange-500"
            }`
          }
          to="/faq"
        >
          FAQ
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
