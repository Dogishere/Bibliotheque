import AddBookModal from "../components/AddBookModal";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Books() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
            setIsOpen(!isOpen)  
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between border-b border-gray-300">
                    <p className="text-4xl text-gray-600 p-5">
                        Livres
                    </p>

                    <button className="mr-5 rounded-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700" onClick={handleClick}>
                        Ajouter
                    </button>
                </div>
                <div className="flex justify-center mt-6">
                    <input type="search" className="p-2 w-2/5 border rounded-s-lg border-gray-400 focus:border-gray-600" />
                    <button className="rounded-e-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700">
                        Rechercher
                    </button>
                </div>

                <div className=" mt-4 rounded-lg border border-gray-200">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="px-6 py-3">Titre</th>
                                <th className="px-6 py-3">Auteur</th>
                                <th className="px-6 py-3">Année</th>
                                <th className="px-6 py-3">Genre</th>
                                <th className="px-6 py-3">Statut</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    Les Misérables
                                </td>

                                <td className="px-6 py-4">
                                    Victor Hugo
                                </td>

                                <td className="px-6 py-4">
                                    1862
                                </td>

                                <td className="px-6 py-4">
                                    Roman
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        Disponible
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    Le Petit Prince
                                </td>

                                <td className="px-6 py-4">
                                    Antoine de Saint-Exupéry
                                </td>

                                <td className="px-6 py-4">
                                    1943
                                </td>

                                <td className="px-6 py-4">
                                    Conte
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                                        Emprunté
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen && (<AddBookModal handleClick={handleClick} />)}
        </div>
    );
}

