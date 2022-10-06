import React, { useState } from 'react'

const Pagination = ({ setLoadMore }) => {
	
    
    const [busqueda, setbusqueda] = useState(1);

	const { page } = busqueda;

	const [error, seterror] = useState(false);

	const actualizarState = (e) => {
		setbusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const buscarInformacion = (e) => {
		e.preventDefault();

		seterror(false);
		setLoadMore(busqueda + 1);
	};

    console.log(page)

    console.log(busqueda, "pag")

	return (
		<div onSubmit={buscarInformacion}>
			<button
                type='submit'
				className="button bg-secundary rounded-r-md w-auto p-2"
				onClick={actualizarState}
				value={page}
			>
				Pagination
			</button>
		</div>
	);
};

export default Pagination