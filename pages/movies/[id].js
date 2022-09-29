import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';
import GalleryMovie from '../../components/Movies/GalleryMovie';
import InfoMovie from '../../components/Movies/InfoMovie';
import CastMovie from '../../components/Movies/CastMovie';
import SeoComponent from "../../components/SeoComponent";

const Movie = ({data}) => {
	const router = useRouter();
	if (router.isFallback) {
		return null;
	}
  return (
		<Layout>
			<SeoComponent
				title={`movies Next.js | ${data.title}`}
				description={data.overview}
				image="/images/imagen.png"
			/>
			{router.isFallback ? null : (
				<>
					<InfoMovie data={data} />
					<CastMovie data={data} />
					<GalleryMovie data={data} />
				</>
			)}
		</Layout>
	);
}

export default Movie;

export async function getStaticPaths() {
	const { data } = await axios(
		`https://api.themoviedb.org/3/movie/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&language=es-ES&page=1`
	);
	const paths = data.results.map((m, id) => ({
		params: { id: m.id.toString() },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
   const { data } = await axios(
			`https://api.themoviedb.org/3/movie/${params.id}?append_to_response=credits,videos,images&api_key=95c2cfdbd851e073389c50c5edf078d9`
		);

	return {
		props: {
			data,
		},
	};
}