import React from 'react'
import Layout from '../../components/Layout';
import axios from 'axios';

const OnTheAir = ({data}) => {
  return (  
    <Layout>

    </Layout>
  )
}

export default OnTheAir;

export async function getStaticProps() {
	const { data } = await axios(
		`https://api.themoviedb.org/3/tv/on_the_air?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US&page=1`
	);
	return {
		props: {
			data,
		},
	};
}
