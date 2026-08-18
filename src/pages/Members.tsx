import Sidebar from "../components/Sidebar"
import { useState } from "react";
import AddMemberModal from "../components/AddMemberModal"
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export default function Members() {

     const [isOpen,setIsOpen] = useState(false);
    const members = useSelector((state: RootState) => state.members); 

    function handleClick(){
       setIsOpen(!isOpen)
    }
    return (
        <div className="flex flex-col md:flex-row">
                    <Sidebar />
                    <div className="flex-1">
                        <div className="flex items-center justify-between border-b border-gray-300">
                            <p className="text-4xl text-gray-600 p-5">
                                Membres
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
                                        <th className="px-6 py-3">Id</th>
                                        <th className="px-6 py-3">Nom</th>
                                        <th className="px-6 py-3">Prénom(s)</th>
                                        <th className="px-6 py-3">email</th>
                                        <th className="px-6 py-3">date d'inscription</th>
                                    </tr>
                                </thead>
        
                                <tbody>{ members.map((member) =>(
                                    <tr  key={member.id} className="border-b bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {member.id}
                                        </td>
        
                                        <td className="px-6 py-4">
                                            {member.firstName}
                                        </td>
        
                                        <td className="px-6 py-4">
                                            {member.lastName}
                                        </td>
        
                                        <td className="px-6 py-4">
                                            {member.email}
                                        </td>
        
                                        <td className="px-6 py-4">
                                            {member.registrationDate}
                                        </td>
                                    </tr>
                                ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {isOpen && (<AddMemberModal handleClick={handleClick} />)}
                </div>
    )
}