import Sidebar from "../components/Sidebar";


export default function Books() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="flex items-center justify-between border-b border-gray-300">
                    <p className="text-4xl text-gray-600 p-5">
                        Livres
                    </p>

                    <button className="mr-5 rounded-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700">
                        Ajouter
                    </button>
                </div>
                <div className="flex justify-center mt-6">
                    <input type="text" className="p-2 w-2/5 border rounded-s-lg border-gray-400 focus:border-gray-600"/>
                    <button className="rounded-e-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700">
                        Rechercher
                    </button>
                </div>
                <div>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Livre</th>
                                <th>Catégorie</th>
                                <th>Auteur</th>
                                <th>Numéro</th>
                                <th>Membre</th>
                                <th>Date d'emprunt</th>
                                <th>Date de retour</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

