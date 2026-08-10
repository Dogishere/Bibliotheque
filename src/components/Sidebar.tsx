import { NavLink } from "react-router-dom"
import { FaBook } from "react-icons/fa"
import { FaGauge } from "react-icons/fa6"
import { FaHandHolding } from "react-icons/fa"
import { FaUser } from "react-icons/fa"


const dashboardList = [
    { id: 1, name: "Livres", path: "/books", icon: FaBook },
    { id: 2, name: "Emprunts", path: "/loans", icon: FaHandHolding },
    { id: 3, name: "Membres", path: "/members", icon: FaUser }
]


export default function Sidebar() {
    return (
        <aside className="w-60 h-screen text-white bg-amber-700">
            <div>
                <p className="font-bold text-3xl text-center p-6 flex items-center justify-center"><FaBook className="mr-2" />BOOKEO</p><hr className="w-10/12 m-auto opacity-60" />
                <NavLink to="/" className={({ isActive }) => isActive ? "opacity-100 p-4 flex items-center font-semibold" : "opacity-75 p-4 flex items-center"}><FaGauge className="mr-2" />Tableau de bord</NavLink><hr className="w-10/12 m-auto opacity-60" />
            </div>
            <div>
                <p className="text-xs font-semibold p-4 pb-0">GESTION</p>
                <ul>
                    {dashboardList.map(
                        (list) => (
                            <li key={list.id} className=" flex items-center"><NavLink to={list.path} className={({ isActive }) => isActive ? "opacity-100 p-4 flex items-center font-semibold" : "opacity-75 p-4 flex items-center"}><list.icon className="mr-2" />{list.name}</NavLink></li>
                        )
                    )}
                </ul>
            </div>
        </aside>
    )
}