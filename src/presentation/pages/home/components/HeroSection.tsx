import { NavLink } from 'react-router-dom'
import { env } from '../../../../shared/config/env'
// import mainImg from '../images/image.png'
import logo from '../images/logo.svg'

export function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-forest-900 via-forest-800 to-forest-700">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-forest-700/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-bronze/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-20 pt-10 lg:px-12 lg:pb-28 lg:pt-16">
        <nav className="flex items-center justify-between text-sm text-forest-100">
          <div className="flex h-46 w-160 items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden items-center gap-8 font-medium text-forest-100 lg:flex">
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-bronze transition' : 'transition hover:text-white')} to="/about">
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-bronze transition' : 'transition hover:text-white')} to="/principles">
                Принципы
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-bronze transition' : 'transition hover:text-white')} to="/stories">
                Истории
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-bronze transition' : 'transition hover:text-white')} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
          <button className="rounded-full border border-forest-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-forest-100 transition hover:border-bronze hover:text-white">
            Личный кабинет
          </button>
        </nav>
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl text-forest-50">
            <p className="text-sm uppercase tracking-[0.45ем] text-bronze">Экосистема</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              {env.appName}
            </h1>
            <p className="mt-6 text-base text-forest-100/90">
              Помогаем ветеранам выстраивать бизнес, усиливать личные навыки и
              перезагружать карьеру в мирной жизни, чтобы каждый шаг в новом
              пути был осознанным и уверенным.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#missions"
                className="inline-flex items-center justify-center rounded-full bg-bronze px-8 py-3 text-sm font-semibold text-forest-900 shadow-glow transition hover:bg-sand"
              >
                Присоединиться к сообществу
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-forest-400 px-8 py-3 text-sm font-semibold text-forest-100 transition hover:border-bronze hover:text-white"
              >
                Узнать о программе
              </a>
            </div>
          </div>
          <div className="relative flex w-full max-w-md justify-end">
            {/* <img
              src={mainImg}
              alt="Ветеран"
              className="relative z-10 w-full rounded-[2.5rem] border border-white/10 object-cover shadow-2xl lg:rounded-[3.5rem]"
            /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
