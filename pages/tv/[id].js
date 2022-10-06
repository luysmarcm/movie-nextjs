import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";
import CastTv from "../../components/Tv/CastTv";
import GalleryTv from "../../components/Tv/GalleryTv";
import InfoTv from "../../components/Tv/InfoTv";
import SeoComponent from "../../components/SeoComponent";


const TvShows = (data) => {
	const router = useRouter();
	if (router.isFallback) {
		return null;
	}
	return (
		<Layout>
			<SeoComponent
				title={`movies Next.js | ${data.data.name}`}
				description={data.data.overview}
				image="/images/imagen.png"
			/>
			<InfoTv data={data} />
			<CastTv data={data} />
			<GalleryTv data={data} />
		</Layout>
	);
};

export default TvShows;


export async function getStaticPaths() {
	// const { data } = await axios(
	// 	`https://api.themoviedb.org/3/tv/popular?api_key=95c2cfdbd851e073389c50c5edf078d9`
	// );

	const res = await fetch(
		"https://api.themoviedb.org/3/tv/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&page=1"
	);
	const data = await res.json();

	console.log(data, "ajsdhkajbdkabdsk");
	const paths = data.results.map((m, id) => ({
		params: { id: m.id.toString() },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	// const { data } = await axios(
    //     `https://api.themoviedb.org/3/tv/${params.id}?append_to_response=credits,videos,images&api_key=95c2cfdbd851e073389c50c5edf078d9`
	// );

		const res = await fetch(
		 `https://api.themoviedb.org/3/tv/${params.id}?append_to_response=credits,videos,images&api_key=95c2cfdbd851e073389c50c5edf078d9`
		);
		const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
