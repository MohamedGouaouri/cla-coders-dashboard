import { Classic } from "@theme-toggles/react"
import { Link } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux'
import Logo from '../assets/logo.svg'
import { toggleTheme } from "../redux/slices/ui.slice";
import clsx from "clsx";

export const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => {
    return state.ui.theme
})
const isLight = theme == 'light'
  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }
  return <div className={clsx(!isLight ? 'dark':'', "navbar text-black bg-slate-200 shadow-md dark:bg-bgNavDark dark:text-white")}>
    <div className="flex-1">
      <Link to={"/"} className="btn btn-ghost text-xl"><img  src={Logo} height={32} width={32}/> CodeCla</Link>
      <Link to={"/challenges"} className="btn btn-ghost text-xl">Challenges</Link>
      <Link to={"/leaderboard"} className="btn btn-ghost text-xl">Leaderboard</Link>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 dark:bg-bgNavDark dark:text-white">
          <li>
            <Link to={"/profile"} className="justify-between">
              Profile
            </Link>
          </li>
          <li><Link>Logout</Link></li>
        </ul>
      </div>
      <Classic toggled={!isLight} toggle={handleThemeToggle} duration={750}/>
    </div>
  </div>
}