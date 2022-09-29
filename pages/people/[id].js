import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";
import InfoPerson from "../../components/People/InfoPerson";
import Credits from "../../components/People/Credits";
import SeoComponent from "../../components/SeoComponent";

const Person = ({ data }) => {
	const router = useRouter();
	if (router.isFallback) {
		return null;
	}

	const birthday = new Date(data.birthday).toLocaleDateString("en-us", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const age = calculateAge(new Date(data.birthday));

	function calculateAge(birthday) {
		const ageDifMs = Date.now() - birthday;
		const ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	const castMovies = data.combined_credits.cast || [];

	const credits = castMovies
		.map((movie) => {
			const title = movie.title || movie.name || "Untitled";
			const release_date = movie.release_date || movie.first_air_date || "";

			return {
				...movie,
				title,
				release_date,
				release_year: release_date ? release_date.split("-")[0] : "Future",
				linkToPage:
					movie.media_type === "movie"
						? `/movies/${movie.id}`
						: `/tv/${movie.id}`,
			};
		})
		.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

	const knownFor = castMovies
		.sort((a, b) => b.popularity - a.popularity)
		.slice(0, 5)
		.map((movie) => {
			const title = movie.title || movie.name || "Untitled";

			return {
				...movie,
				title,
				poster_path: movie.poster_path
					? "https://image.tmdb.org/t/p/w185/" + movie.poster_path
					: "https://via.placeholder.com/185x278",
				linkToPage:
					movie.media_type === "movie"
						? `/movies/${movie.id}`
						: `/tv/${movie.id}`,
			};
		});

	return (
		<Layout>
			<SeoComponent
				title={`movies Next.js | ${data.name}`}
				description={data.biography}
				image="/images/imagen.png"
			/>
			{router.isFallback ? null : (
				<>
					<InfoPerson data={data} age={age} knownFor={knownFor} />
					<Credits data={data} />
				</>
			)}
		</Layout>
	);
};

export default Person;

export async function getStaticPaths() {
	const { data } = await axios(
		`https://api.themoviedb.org/3/person/popular?api_key=95c2cfdbd851e073389c50c5edf078d9&language=en-US`
	);

	const paths = data.results.map((m, id) => ({
		params: { id: m.id.toString() },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const { data } = await axios(
		`https://api.themoviedb.org/3/person/${params.id}?append_to_response=external_ids,combined_credits&api_key=95c2cfdbd851e073389c50c5edf078d9`
	);

	return {
		props: {
			data,
		},
	};
}
