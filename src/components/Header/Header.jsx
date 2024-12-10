import { ChevronRightIcon } from "lucide-react";
import HeaderInfos from "./HeaderInfos";
import { useState } from "react";

 export default function Header(){

    const [valueInput, setValueInput] = useState('')
    const [passIP, setPassIP] = useState('')

    const verificationInformations = () => {
        // if(valueInput.trim().length !== 12){
        //     alert("Verifique se tem + de 12 numeros e Coloque a pontuação certinha")
        // } else {
            setPassIP(valueInput)
        // }
    }

    return(
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full py-10 bg-patterBackground bg-no-repeat bg-center bg-cover flex flex-col items-center gap-y-12">
                <div className="w-full flex flex-col items-center gap-y-6">
                <h1 className="text-3xl text-white font-semibold">IP Address Tracker</h1>
                    <div className="w-1/4 h-12 flex">
                        <input 
                            type="text" 
                            className="w-full h-full rounded-l-xl outline-none p-3 pl-6 font-medium" 
                            placeholder="Search for any IP adress"
                            onChange={(e) => setValueInput(e.target.value)}
                            value={valueInput}
                        />


                        <button 
                            className="bg-slate-700  flex justify-center items-center w-14 rounded-r-xl"
                            onClick={verificationInformations} >
                            <ChevronRightIcon className="text-white w-8"/>
                        </button>
                    </div>
                </div>
                <HeaderInfos passIP={passIP} />
            </div>
            
        </div>
        
    )
 }