export default function AddBookModal({ handleClick }) {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="relative w-full max-w-md rounded-xl bg-white p-6">
                    <button className="absolute top-1 right-2 opacity-70 font-bold hover:opacity-100" onClick={handleClick}>X</button>
                    <h2 className="text-2xl font-semibold pb-4">
                        Ajouter un livre
                    </h2>
                    <div>
                        <div className="py-2">
                            <label htmlFor="title">
                                Titre :
                                <input type="text" name="title" id="title" className="block w-full p-2 border border-gray-400 rounded-md"  />
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="author">
                                Auteur :
                                <input type="text" name="author" id="author" className="block w-full  p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="year">
                                Année :
                                <input type="text" name="year" id="year" className="block w-full  p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="genre">
                                Genre :
                                <input type="text" name="genre" id="genre" className="block w-full p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className=" mt-2 w-full rounded-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
