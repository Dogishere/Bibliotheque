import Sidebar from "../components/Sidebar";


export default function Loans () {
    return ( 
        <div className="flex flex-col md:flex-row">
            <Sidebar/>
            <div className="flex-1">
                <div className="flex items-center justify-between w-full border-b border-gray-300">
                    <p className="text-4xl text-gray-600 p-5">
                        Emprunts
                    </p>
                </div>
            </div>
        </div>
     );
}
 
