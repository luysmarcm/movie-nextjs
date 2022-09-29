import React from 'react'
import axios from 'axios'
import Layout from "../components/Layout";
import PopularPeople from '../components/People/PopularPeople';
import SeoComponent from "../components/SeoComponent";

const People = ({data}) => {
  return (
		<Layout>
			<SeoComponent
				title={`movies Next.js | People`}
				description="List People"
				image="/images/imagen.png"
			/>
			<PopularPeople popularPeople={data} />
		</Layout>
	);
}

export default People

export async function getStaticProps() {
	const { data } = await axios(
		`https://api.themoviedb.org/3/person/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US`
	);
	return {
		props: {
			data,
		},
	};
}