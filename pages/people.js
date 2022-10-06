import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from "../components/Layout";
import PopularPeople from '../components/People/PopularPeople';
import SeoComponent from "../components/SeoComponent";
import HeadingPage from '../components/HeadingPage';
import SearchMenu from '../components/SearchMenu';
import GridLoading from '../components/Loading/GridLoading';
import LoadMore from '../components/LoadMore';

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b4a549abb798b19dbb7e63335d135053";

const People = ({data}) => {


	const [searchTerm, setSearchTerm] = useState("");
	const [person, setperson] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [counts, setCounts] = useState({
		total_pages: 500,
		total_results: 10000,
	});

	const hasNext = counts.total_pages > currentPage;

	const loadMoreItems = () => {
		// just set the page, the effect will respond to it
		if (hasNext) {
			setCurrentPage((page) => page + 1);
		}
	};

	const onChangeSearch = (value) => {
		// reset page to 1 when changing search
		setSearchTerm(value);
		setCurrentPage(1);
	};

	// run effect to load person when the page or the searchTerm changes
	useEffect(() => {
		const endpoint =
			searchTerm === ""
				? `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
				: `${API_URL}search/person?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
						searchTerm
				  )}&page=${currentPage}`;

		// could use async/await but promise/then is fine too
		setLoading(true);
		fetch(endpoint)
			.then((response) => response.json())
			.then((json) => {
				// API doesn't actually throw an error if no API key
				if (!json?.results) {
					throw new Error(json?.statusMessage ?? "Error");
				}
				console.log(json);
				// replace state on page 1 of a new search
				// otherwise append to exisiting
				setperson((previous) =>
					currentPage === 1 ? json.results : [...previous, ...json.results]
				);
				setCounts({
					total_pages: json.total_pages,
					total_results: json.total_results,
				});
			})
			.catch((error) => console.error("Error:", error))
			.finally(() => setLoading(false));
	}, [searchTerm, currentPage]);

	const handleScroll = () => {
		const windowHeight =
			"innerHeight" in window
				? window.innerHeight
				: document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight - 1) {
			loadMoreItems();
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleanup function
		return () => window.removeEventListener("scroll", handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	console.log(person)

  return (
		<Layout>
			<SeoComponent
				title={`moviesNext.js | People`}
				description="List People"
				image="/images/imagen.png"
			/>
			<HeadingPage titulo="People" />

			<SearchMenu value={searchTerm} onChange={onChangeSearch} />
			<PopularPeople popularPeople={person} />
			{loading && <GridLoading />}
			<LoadMore
				hasNext={hasNext}
				loadMoreItems={loadMoreItems}
				loading={loading}
				counts={counts}
			/>
		</Layout>
	);
}

export default People

// export async function getStaticProps() {
// 	const { data } = await axios(
// 		`https://api.themoviedb.org/3/person/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US`
// 	);
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }