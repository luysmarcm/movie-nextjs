import Layout from "../components/Layout";
import PopularMovie from "../components/Movies/PopularMovie";
import PopularShow from "../components/Tv/PopularShow";
import SeoComponent from "../components/SeoComponent";
import Banner from "../components/Home/Banner";

export default function Home({ data, datatv, dataca }) {
	return (
		<Layout>
			<SeoComponent
				title="moviesNext.js"
				description="Pagina de Consultas las Peliculas y Series"
				image="/images/imagen.png"
			/>
			<Banner encartelera={dataca.results} />
			<PopularMovie popularMovies={data.results} />
			<PopularShow tvshow={datatv.results} />
		</Layout>
	);
}


export async function getStaticProps() {
		const res = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1"
		);
		const data = await res.json();

		const resp = await fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1"
		);
		const datatv = await resp.json();

		const respu = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1"
		);
		const dataca = await respu.json();

		return {
			props: {
				data,
				datatv,
				dataca,
			},
		};

}
