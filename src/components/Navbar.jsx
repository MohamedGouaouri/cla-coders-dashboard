import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";



export const Navbar = () => {
    return <div className="navbar text-black bg-slate-200 shadow-md sticky">
    <div className="flex-1">
      <Link to={"/"} className="btn btn-ghost text-xl">CodeCla</Link>
      <Link to={"/challenges"} className="btn btn-ghost text-xl">Challenges</Link>
      <Link to={"/leaderboard"} className="btn btn-ghost text-xl">Leaderboard</Link>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaRegBell size={28}/>
            <span className="badge badge-xs indicator-item bg-red-700 p-1">8</span>
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow">
          <div className="card-body">
            {/* TODO: Implement notification management */}
            <span className="">Notification 1</span>
            <span className="">Notification 2</span>
            <span className="">Notification 3</span>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
          <li>
            <Link to={"/profile"} className="justify-between">
              Profile
            </Link>
          </li>
          <li><Link>Logout</Link></li>
        </ul>
      </div>
    </div>
  </div>
}