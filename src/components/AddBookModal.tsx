import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Book } from "../types/types";
import { addBook } from "../features/booksSlice";

export default function AddBookModal({ handleClick}) {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [year,setYear] = useState("");
    const [genre,setGenre] = useState("");
    const dispatch = useDispatch();
    let counter = 0;    


     function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const book : Book = {
            id: `book-${counter++}`,
            title,
            author,
            year: Number(year),
            genre,
            status :"available"
        }
        dispatch(addBook(book));
        handleClick();  
    }



    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="relative w-full max-w-md rounded-xl bg-white p-6">
                    <button className="absolute top-1 right-2 opacity-70 font-bold hover:opacity-100" onClick={handleClick}>X</button>
                    <h2 className="text-2xl font-semibold pb-4">
                        Ajouter un livre
                    </h2>
                    <span>{title}</span>
                        <form action="#" onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                            
                        <div className="py-2">
                            <label htmlFor="title">
                                Titre :
                                <input required type="text" value={title} name="title" id="title" className="block w-full p-2 border border-gray-400 rounded-md" onChange={(e)=>setTitle(e.target.value)} />
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="author">
                                Auteur :
                                <input required value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" name="author" id="author" className="block w-full  p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="year">
                                Année :
                                <input required value={year} onChange={(e)=>setYear(e.target.value)} type="text" name="year" id="year" className="block w-full  p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="genre">
                                Genre :
                                <input required value={genre} onChange={(e)=>setGenre(e.target.value)} type="text" name="genre" id="genre" className="block w-full p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className=" mt-2 w-full rounded-lg bg-amber-600 px-5 py-2.5 text-white cursor-pointer hover:bg-amber-700" type="submit">Ajouter</button>
                    </div>
                        </form>
                </div>
            </div>
        </div>
    )
}
