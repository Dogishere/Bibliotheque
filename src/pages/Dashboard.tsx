import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { FaBook } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa"
import { FaUser } from "react-icons/fa";


export default function Dashboard() {
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
                    <Card title="Livres" value="0" icon={FaBook} />
                    <Card title="Emprunts" value="0" icon={FaHandHolding} />
                    <Card title="Membres" value="0" icon={FaUser} />
                </div>
            </div>
        </div>
    );
}

