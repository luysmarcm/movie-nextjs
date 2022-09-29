import React from 'react'
import axios from "axios";
import Layout from '../components/Layout'
import PopularMovie from '../components/Movies/PopularMovie';
import SeoComponent from '../components/SeoComponent';

const Movies = ({data}) => {
  return (
		<Layout>
			<SeoComponent
				title="movies Next.js"
				description="Pagina de Consultas de Peliculas"
				image="/images/imagen.png"
			/>
			<PopularMovie popularMovies={data} />
		</Layout>
	);
}

export default Movies

export async function getStaticProps() {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1`
	);
	return {
		props: {
			data,
		},
	};
}
