import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout';
import PopularShow from '../components/Tv/PopularShow';
import OnAir from '../components/Tv/OnAir';
import SeoComponent from '../components/SeoComponent';

const Tv = ({ tvshow, onair, top }) => {
	return (
		<Layout>
			<SeoComponent
				title="movies Next.js | Tv Show"
				description=""
				image="/images/imagen.png"
			/>
			<PopularShow tvshow={tvshow} top={top} />
			<OnAir onair={onair} />
		</Layout>
	);
};

export default Tv


export async function getStaticProps() {

	const { data: tvshow } = await axios(
		`https://api.themoviedb.org/3/tv/popular?api_key=95c2cfdbd851e073389c50c5edf078d9`
	);

	const { data: onair } = await axios(
		`https://api.themoviedb.org/3/tv/on_the_air?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US&page=1`
	);

	const { data: top } = await axios(
		`https://api.themoviedb.org/3/tv/top_rated?api_key=95c2cfdbd851e073389c50c5edf078d9`
	);



	https: return {
		props: {
			tvshow,
			onair,
			top
		},
	};
}