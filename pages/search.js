import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Layout from '../components/Layout';
import ListSearch from '../components/ListSearch';
import axios from 'axios';
import { FormularioSearch } from '../components/FormularioSearch';
import ResultsSearch from '../components/ResultsSearch';

const Search = () => {

	const router = useRouter();
	const { query } = router.query; 

	const [buscar, setBuscar] = useState({
		query: query
	});
	const [movies, setMovies] = useState([]);
	const [tv, settv] = useState([]);

	const [dataM, setDataM] = useState("");
	const [dataT, setDataT] = useState("")

	
	// use async/await with fetch to call the TMDb API
	// const searchMovies = async (e) => {
	// 	e.preventDefault(); // prevent page from refreshing on submit

	// 	const url = `https://api.themoviedb.org/3/search/movie?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US&query=${query}`;
		
	// 	// when interacting with APIs, remember to handle error -- use try/catch
	// 	try {
	// 		const res = await fetch(url); // fetch returns a promise -- use await to wait until promise settles and returns its result
	// 		const data = await res.json(); // response.json() again returns a promise -- use await
	
	// 		console.log(tv,"nskbdkn")
	// 		setMovies(data);

	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };


	useEffect(() => {
		// console.log(!buscarArtista.artist && !buscarArtista.song)
		// if (!buscarArtista.artist && !buscarArtista.song) return;

		const searchMovies = async () => {
			const { query } = buscar;
			// const apikey = "660a4395f992ff67786584e238f501";
			const url1 = `https://api.themoviedb.org/3/search/movie?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US&query=${query}`;
			const url2 = `https://api.themoviedb.org/3/search/tv?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US&query=${query}`;

			const [dataM , dataT] = await Promise.all([axios(url1), axios(url2)]);
			setMovies(dataM.data);
			settv(dataT.data);
			
		};
		searchMovies();
	}, [buscar]);

	if (movies.length === 0) return null;
	console.log(query)
	return (
		<Layout>
			<div className="container mx-auto px-4 pt-16 mb-16 flex flex-col-2">
				<ListSearch movies={movies} tv={tv} query={query} />
				<div className="flex-1 w-full">
					<FormularioSearch setBuscar={setBuscar} />
					<ResultsSearch movies={movies} tv={tv} />
				</div>
			</div>
		</Layout>
	);
}

export default Search;