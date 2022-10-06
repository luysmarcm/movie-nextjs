import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchMovies = () => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push({
			pathname: "/search/movies",
			query: { query },
		});
	};
	return (
		<form className="form container mx-auto px-4 pt-16">
			<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold py-4">
				Search
			</h2>
			<input
				type="text"
				className="input p-2 w-96 text-base font-normal text-white bg-primary bg-clip-padding bg-no-repeat border-solid focus:outline-none rounded-l-md placeholder-white m-0 hover:bg-secundary"
				name="query"
				placeholder="i.e. Jurassic Park"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			></input>
			<button
				onClick={handleClick}
				className="button bg-secundary rounded-r-md  w-auto p-2"
			>
				Search
			</button>
		</form>
	);
};

export default SearchMovies;
