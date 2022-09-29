import React from 'react'
import Layout from '../components/Layout';
import axios from 'axios';
import CardMovies from '../components/Movies/CardMovies';
import SeoComponent from '../components/SeoComponent';

const DcUniverse = ({data}) => {
  return (
		<Layout>
			<SeoComponent
				title="movies Next.js | DC COMIC UNIVERSE"
				description={data.description}
				image="/images/imagen.png"
			/>
			<div className="container mx-auto px-4 pt-16 mb-16">
				<div className="popular-movies">
					<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
						DC COMIC UNIVERSE
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{data.results.map((movie, i) => (
							<CardMovies movie={movie} key={i} />
						))}
					</div>
				</div>
				<button> MOSTAR MAS</button>
			</div>
		</Layout>
	);
}

export default DcUniverse

export async function getStaticProps() {
	const { data } = await axios.get(
		`https://api.themoviedb.org/4/list/3?page=1&api_key=95c2cfdbd851e073389c50c5edf078d9`
	);
	return {
		props: {
			data,
		},
	};
}