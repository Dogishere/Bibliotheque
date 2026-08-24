import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { FaBook } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useEffect } from "react";



export default function Dashboard() {
    let books = useSelector((state:RootState)=>state.books)
    const members = useSelector((state:RootState)=>state.members)
    const b = localStorage.getItem("books")
    console.log(JSON.parse(b))
    useEffect(()=>{

    },[])

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <div className="flex-1 ">
                <div>
                    <p className="text-4xl text-gray-600 p-5">
                         Tableau de bord
                    </p>
                </div>
                <div className=" p-2 grid grid-cols-3 gap-3">
                    <Card title="Livres" value={books.length} icon={FaBook} />
                    <Card title="Emprunts" value="0" icon={FaHandHolding} />
                    <Card title="Membres" value={members.length} icon={FaUser} />
                </div>
            </div>
        </div>
    );
}

