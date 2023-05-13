// js/components/MainPage.jsx
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Header from "./Header";

export default function MainPage() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    const deleteRecord = async (e) => {
        e.preventDefault();

        console.log(e.target.id);
        const id = e.target.id;

        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (e) {
            console.log(e);
        }
    }

    const router = useRouter();
    const insert = () => {
        router.push('/insert');
    };


    return (
            <div className={"container bg-green-100"}>
                <Header title={"Aplicatia pentru realizarea unei programari intr-o clinica medicala"} />
                <h1 className={"w-[700px] mx-auto text-center text-6xl font-bold text-lime-950"}>Clinica EliCover</h1>
                <div class="flex justify-center" >
                    <button type="button"
                        onClick={insert}
                        className="w-[500px] mt-4 text-gray-900 bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Programeaza-te acum!
                    </button>
                </div>
                <div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 mx-10"}>
                    {
                        records.map(record => (
                            <div key={record._id}
                                className={"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "}
                            >
                                <h3 className={"mb-2 text-2xl font-bold text-green-500"}>Pacient: {record.pacient}</h3>
                                <p className={"font-normal text-neutral-950"}>Doctor: {record.doctor}</p>
                                <p className={"font-normal text-neutral-950"}>Specializare: {record.specializare}</p>
                                <p className={"font-normal text-neutral-950"}>Data: {record.dataProgramare}</p>

                                <button type="button"
                                    onClick={deleteRecord}
                                    id={record._id}
                                    className="mt-4 text-gray-900 bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Anuleaza programare!
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
    
    )
}