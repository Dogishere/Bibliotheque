import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBook } from "react-icons/fa"
import { FaGauge } from "react-icons/fa6"
import { FaHandHolding } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";


const dashboardList = [
    { id: 1, name: "Livres", path: "/books", icon: FaBook },
    { id: 2, name: "Emprunts", path: "/loans", icon: FaHandHolding },
    { id: 3, name: "Membres", path: "/members", icon: FaUser }
]


export default function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        if (isMenuOpen === false) {
            setIsMenuOpen(true);
        }
        else {
            setIsMenuOpen(false);
        }
    }
    return (
        <div>
            {/* mobile nav */}
            <div hidden={isMenuOpen} className="visible md:hidden w-screen flex items-center text-white bg-amber-700">
                <button onClick={handleClick} ><GiHamburgerMenu className="text-5xl p-2" /></button>
                <p className="font-bold text-3xl flex-1 text-center">BOOKEO</p>
            </div>
            <div hidden={!isMenuOpen} className="text-white bg-amber-700">
                <div className=" h-screen">
                    <div >
                        <button className="float-right font-bold p-2 md:hidden" onClick={handleClick}>X</button>
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
                </div>
            </div>

             {/*desktop nav*/}           
            <aside className="invisible md:visible md:w-60 text-white bg-amber-700" >
                <div className=" h-screen">
                    <div >
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
                </div>
            </aside>
        </div>
    )
}