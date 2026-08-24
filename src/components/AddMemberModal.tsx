import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import type { Member } from "../types/types";
import  {addMember}  from "../features/membersSlice";
import type { RootState } from "../app/store";

export default function AddMemberModal({ handleClick}) {
    const [lastName,setLastName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const members = useSelector((state:RootState)=>state.members)

    

     function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const member : Member = {
            id: `M-${members.length}`,
            lastName,
            firstName,
            email,
            registrationDate: new Date().toISOString().split("T")[0],
        }
        dispatch(addMember(member));
        localStorage.setItem("members",JSON.stringify(members))

        handleClick();  
    }



    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="relative w-full max-w-md rounded-xl bg-white p-6">
                    <button className="absolute top-1 right-2 opacity-70 font-bold hover:opacity-100" onClick={handleClick}>X</button>
                    <h2 className="text-2xl font-semibold pb-4">
                        Ajouter un membre
                    </h2>
                    <span>{firstName}</span>
                        <form action="#" onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                            
                        <div className="py-2">
                            <label htmlFor="title">
                                Nom :
                                <input required type="text" value={lastName} name="title" id="title" className="block w-full p-2 border border-gray-400 rounded-md" onChange={(e)=>setLastName(e.target.value)} />
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="author">
                                Prénom(s) :
                                <input required value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="author" id="author" className="block w-full  p-2 border border-gray-400 rounded-md"/>
                            </label>
                        </div>
                        <div className="py-2">

                            <label htmlFor="year">
                                email :
                                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="year" id="year" className="block w-full  p-2 border border-gray-400 rounded-md"/>
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
