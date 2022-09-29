import Image from "next/image";

const myLoader = ({ src }) => {
	return `${src}`;
};
const InfoTv = ({data}) => {
  return (
		<div className="tv-info border-b border-gray-800">
			<div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
				<div className="flex-none  w-96">
					<Image
						loader={myLoader}
						src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
						alt={data.name}
						className="movie-poster w-64 lg:w-96 rounded-xl"
						id="tv-poster"
						width={500}
						height={750}
						unoptimized
					/>
				</div>
				<div className="md:ml-24">
					<h2 className="text-4xl mt-4 md:mt-0 font-semibold">
						{data.data.name}
					</h2>
					<div className="flex flex-wrap items-center text-gray-400 text-sm">
						<svg className="fill-current text-primary w-4" viewBox="0 0 24 24">
							<g data-name="Layer 2">
								<path
									d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
									data-name="star"
								/>
							</g>
						</svg>
						<span className="ml-1">{data.data.vote_average}</span>
						<span className="mx-2">|</span>
						<span>{data.data.first_air_date}</span>
						<span className="mx-2">|</span>
						<span className="mx-2">|</span>
						{data.data.genres.map((g, i) => (
							<span key={i}>
								{g.name} {""}
							</span>
						))}
					</div>

					<p className="text-gray-300 mt-8">{data.data.overview}</p>

					<div className="mt-12">
						<h4 className="text-white font-semibold">Featured Crew</h4>
						<div className="flex mt-4">
							{data.data.credits.crew.slice(0, 3).map((crew, i) => (
								<div className="mr-8" key={i}>
									<div>{crew.name}</div>
									<div className="text-gray-400 text-sm">{crew.job}</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-12">
						<h4 className="text-white font-semibold">Temporadas</h4>
						<span>{data.data.number_of_seasons}</span>
						<h4 className="text-white font-semibold">Numero de Capitulos</h4>
						<span>{data.data.number_of_episodes}</span>
						<h4 className="text-white font-semibold">Network</h4>
						{data.data.networks.map((n, i) => (
							<div className="flex-none  w-20" key={i}>
								<Image
									loader={myLoader}
									src={`https://image.tmdb.org/t/p/w500${n.logo_path}`}
									alt={data.name}
									className="movie-poster w-64 lg:w-96"
									width={500}
									height={133}
									unoptimized
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoTv;