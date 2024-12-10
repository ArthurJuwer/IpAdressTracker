import { ChevronRightIcon, Clipboard, User2Icon } from "lucide-react";
import HeaderInfos from "./HeaderInfos";
import { useEffect, useState } from "react";

export default function Header({ sendDataToParent }) {
    const [ipUser, setIpUser] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            await apiRequest(2);
        })();
    }, []);

    const verificationInformations = () => {
        apiRequest(1);
    };

    async function apiRequest(numberApi) {
        let url;

        if (numberApi === 1) {
            url = `https://user-ip-data-rest-api.p.rapidapi.com/?ip=${valueInput}`;
        } else {
            url = 'https://user-ip-data-rest-api.p.rapidapi.com/check';
        }

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bacd4ec191msh319a7d2444f2392p134885jsn257cae2e51f5',
                'x-rapidapi-host': 'user-ip-data-rest-api.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            if (numberApi === 1) {
                setData(result);
                sendDataToParent(result);
            } else {
                setIpUser(result.ip);
            }
        } catch (error) {
            console.error('Erro ao buscar os dados da API:', error);
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full py-5 bg-patterBackground bg-no-repeat bg-center bg-cover flex flex-col items-center gap-y-12">
                <div className="w-full flex flex-col items-center gap-y-6">
                    <h1 className="text-3xl text-white font-semibold">IP Address Tracker</h1>
                    <div className="w-1/4 h-12 flex">
                        <div className="flex group relative">
                            <div className="absolute bottom-1 right-20 p-2 w-52 invisible group-hover:visible bg-white rounded-xl">
                                <p className="text-black">Seu IP: {ipUser}</p>
                            </div>
                            <button
                                className="bg-slate-700 flex justify-center items-center w-14 rounded-l-xl h-auto group"
                                onClick={() => navigator.clipboard.writeText(ipUser)}
                            >
                                {/* Ícones que alternam ao passar o mouse */}
                                <User2Icon className="block group-hover:hidden text-white w-8" />
                                <Clipboard className="hidden group-hover:block text-white w-8" />
                            </button>
                        </div>
                        <input
                            type="text"
                            className="w-full h-full outline-none p-3 pl-6 font-medium"
                            placeholder="Search for any IP address"
                            onChange={(e) => setValueInput(e.target.value)}
                            value={valueInput}
                        />
                        <button
                            className="bg-slate-700 flex justify-center items-center w-14 rounded-r-xl"
                            onClick={verificationInformations}>
                            <ChevronRightIcon className="text-white w-8" />
                        </button>
                    </div>
                </div>
                <HeaderInfos informations={data} />
            </div>
        </div>
    );
}
