import React from "react"
import notFoundSvg from "../assets/notFound.svg"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-2">
      <img
        src={notFoundSvg}
        alt="not found svg"
        className="max-w-[200px] w-full aspect-square"
      />
      <p className="text-xl sm:text-2xl">Страница не найдена</p>
      <Link
        to="/"
        className="px-[0.8em] py-[0.4em] text-lg sm:text-xl border-2 border-blue-400 text-blue-400 rounded-lg sm:rounded-xl hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-colors">
        На главную
      </Link>
    </div>
  )
}

export default NotFound
