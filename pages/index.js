import Layout from "../components/Layout";
import PopularMovie from "../components/Movies/PopularMovie";
import axios from "axios";
import PopularShow from "../components/Tv/PopularShow";
import SeoComponent from "../components/SeoComponent";
import Banner from "../components/Home/Banner";
import SearchMulti from "../components/SearchMulti";

export default function Home({ data, tvshow, encartelera, top }) {
	return (
		<Layout>
			<SeoComponent
				title="movies Next.js"
				description="Pagina de Consultas las Peliculas y Series"
				image="/images/imagen.png"
			/>
			<Banner encartelera={encartelera.results} />
			<SearchMulti />
			<PopularMovie popularMovies={data} />
			<PopularShow tvshow={tvshow} top={top} />
		</Layout>
	);
}


export async function getStaticProps() {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1`
	);

	const { data: tvshow } = await axios.get(
		`https://api.themoviedb.org/3/tv/popular?api_key=95c2cfdbd851e073389c50c5edf078d9`
	);
	const { data: encartelera } = await axios.get(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US`
	);

	const { data: top } = await axios(
		`https://api.themoviedb.org/3/tv/top_rated?api_key=95c2cfdbd851e073389c50c5edf078d9`
	);

	return {
		props: {
			data,
			tvshow,
			encartelera,
			top,
		},
	};
}
