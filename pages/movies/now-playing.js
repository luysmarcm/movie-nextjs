import React, { useEffect, useState } from 'react'
import HeadingPage from '../../components/HeadingPage';
import Layout from '../../components/Layout';
import CardLoading from '../../components/Loading/CardLoading';
import GridLoading from '../../components/Loading/GridLoading';
import LoadMore from '../../components/LoadMore';
import CardMovies from '../../components/Movies/CardMovies';
import PopularMovie from '../../components/Movies/PopularMovie';
import SearchMenu from '../../components/SearchMenu';
import SeoComponent from '../../components/SeoComponent';


const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b4a549abb798b19dbb7e63335d135053";

const NowPlaying = () => {

  const [searchTerm, setSearchTerm] = useState("");
	const [movies, setmovies] = useState([]);
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

	// run effect to load movies when the page or the searchTerm changes
	useEffect(() => {
		const endpoint =
			searchTerm === ""
				? `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}`
				: `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
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
				setmovies((previous) =>
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

  console.log(movies)

  return (
		<Layout>
			<SeoComponent
				title="movies Next.js"
				description="Pagina de Consultas de Peliculas"
				image="/images/imagen.png"
			/>
			<HeadingPage titulo="Now Playing" />
			<SearchMenu value={searchTerm} onChange={onChangeSearch} />

			<div className="container mx-auto px-4 pt-16 mb-16">
				<div className="top-rated-shows">
					<h2 className="uppercase tracking-wider text-secundary text-2xl	 font-semibold">
						Now Playing
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{movies.map((movie, i) => (
							<CardMovies movie={movie} key={i} />
						))}
					</div>
				</div>
			</div>
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

export default NowPlaying;