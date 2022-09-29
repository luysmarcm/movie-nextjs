import React, { useState } from 'react'

export const FormularioSearch = ({ setBuscar }) => {
	
	const [busqueda, setbusqueda] = useState({
		query: "",
	});

	const { query } = busqueda;

	const [error, seterror] = useState(false);

	const actualizarState = (e) => {
		setbusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const buscarInformacion = (e) => {
		e.preventDefault();

		if (query.trim() === "" ) {
			seterror(true);
			return;
		}
		seterror(false);
		setBuscar(busqueda);
	};
	return (
		<>
			<form
				className="form container mx-auto px-4 "
				// onSubmit={searchMovies}
				onSubmit={buscarInformacion}
			>
				<input
					type="text"
					className="input p-2 w-80 text-base font-normal text-white bg-primary bg-clip-padding bg-no-repeat border-solid focus:outline-none rounded-l-md placeholder-white m-0 hover:bg-secundary"
					name="query"
					placeholder="i.e. Jurassic Park"
					value={query}
					onChange={actualizarState}
					// onChange={(e) => setquery(e.target.value)}
				></input>
				<button
					type="submit"
					className="button bg-secundary rounded-r-md  w-auto p-2"
				>
					Search
				</button>
			</form>
		</>
	);
};
