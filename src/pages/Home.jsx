import React from "react"
import cabImg from "../assets/midis.jpg"
import logo from "../assets/logo.png"
import vk from "../assets/vk.png"

const Home = () => {
  return (
    <div className="w-full overflow-hidden relative flex">
      <img
        src={cabImg}
        alt="midis cab img"
        className="object-cover absolute w-full h-full object-center z-[1]"
      />
      <div className="absolute z-[2] w-full h-full bg-neutral-200/70 backdrop-blur-sm" />
      <div className="z-[3] relative container mx-auto flex flex-col grow justify-center gap-4">
        <div>
          <h1 className="text-4xl text-orange-500">МИДиС</h1>
          <h2 className="text-3xl">Кабинет 245</h2>
          <p className="text-2xl text-neutral-800">
            Кафедра математики и информатики
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="https://midis.ru" target="_blank" rel="noreferrer">
            <img src={logo} alt="official site" className="w-[32px] h-[32px]" />
          </a>
          <a href="https://vk.com/midisit" target="_blank" rel="noreferrer">
            <img src={vk} alt="vk group" className="w-[32px] h-[32px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
