import React, { useEffect, useState } from 'react'
import HeadingPage from '../../components/HeadingPage';
import Layout from '../../components/Layout';
import SearchMenu from '../../components/SearchMenu';
import SeoComponent from '../../components/SeoComponent';
import CardTvShow from '../../components/Tv/CardTvShow';


const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b4a549abb798b19dbb7e63335d135053";

const OnTheAir = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [tvShow, settvShow] = useState([]);
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

	// run effect to load tvShow when the page or the searchTerm changes
	useEffect(() => {
		const endpoint =
			searchTerm === ""
				? `${API_URL}tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${currentPage}`
				: `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
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
				settvShow((previous) =>
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
  return (
		<Layout>
			<SeoComponent
				title="moviesNext.js | On the air"
				description=""
				image="/images/imagen.png"
			/>
			<HeadingPage titulo="Top Tv Show" />
			<SearchMenu value={searchTerm} onChange={onChangeSearch} />
			<div className="container mx-auto px-4 pt-16 mb-16">
				<div className="top-rated-shows">
					<h2 className="uppercase tracking-wider text-secundary text-2xl	 font-semibold">
						Top Rated Shows
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{tvShow.map((show, i) => (
							<CardTvShow show={show} key={i} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default OnTheAir;