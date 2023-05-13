// js/components/MainPage.jsx
import { useRouter } from 'next/router';
export default function InsertPage() {
    const router = useRouter();
	const insertRecord = async (e) => {
		e.preventDefault();

		const pacient = document.getElementById('pacient').value;
		const doctor = document.getElementById('doctor').value;
        const specializare = document.getElementById('specializare').value;
        const dataProgramare = document.getElementById('dataProgramare').value;
		const data = {
			pacient: pacient,
			doctor: doctor,
            specializare: specializare,
            dataProgramare: dataProgramare
		};

		console.log(data);

		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('pacient').value = '';
				document.getElementById('doctor').value = '';
                document.getElementById('specializare').value = '';
                document.getElementById('dataProgramare').value = '';
                router.push('/');
			})
        
            

	}

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto bg-green-100"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}></h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-lime-950 font-bold"}>Completeaza formularul pentru a te programa in clinica noastra</p>

				<form>
					<div className="mb-6">
						<label className="block mb-2 text-sm text-lime-950 dark:text-green font-bold">Nume pacient:</label>
						<input type="text" id="pacient"
						       className="w-[700px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Introduceti numele" required/>
					</div>
					<div className="mb-6">
						<label
						       className="block mb-2 text-sm text-lime-950 dark:text-black font-bold">Nume doctor:</label>
						<input type="text" id="doctor"
						          className=" w-[700px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						          required/>
					</div>
                    <div className="mb-6">
						<label
						       className="block mb-2 text-sm font-bold text-lime-950 dark:text-black">Specializare:</label>
						<input type="text" id="specializare"
						          className=" w-[700px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						          required/>
					</div>
                    <div className="mb-6">
						<label
						       className="block mb-2 text-sm font-bold text-lime-950 dark:text-black">Data:</label>
						<input type="text" id="dataProgramare"
						          className=" w-[700px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						          placeholder="ZZ/MM/AAAA" required/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-lime-950 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Submit
					</button>
				</form>

			</div>
		</section>
	)
}