import AddBookModal from "../components/AddBookModal";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useSelector} from "react-redux";
import type { RootState } from "../app/store";




export default function Books() {
    const [isOpen,setIsOpen] = useState(false);
    const books = useSelector((state: RootState) => state.books); 

    function handleClick(){
       setIsOpen(!isOpen)
    }
    console.log(books)
   

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
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

                        <tbody>{ books.map((book) =>(
                            <tr  key={book.title} className="border-b bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {book.title}
                                </td>

                                <td className="px-6 py-4">
                                    {book.author}
                                </td>

                                <td className="px-6 py-4">
                                    {book.year}
                                </td>

                                <td className="px-6 py-4">
                                    {book.genre}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        {book.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen && (<AddBookModal handleClick={handleClick} />)}
        </div>
    );
}

