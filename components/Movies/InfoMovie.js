import Image from 'next/image';

const myLoader = ({ src }) => {
	return `${src}`;
};

const convertBreadcrumb = (string) => {
	const split = string.split("?", 2);

	return split[0]
		.replace(/-/g, " ")
		.replace(/oe/g, "ö")
		.replace(/ae/g, "ä")
		.replace(/ue/g, "ü")
		.replace("/", "")
		.replace("/?", "")
};


const InfoMovie = ({data}) => {

	console.log(data.images.backdrops[0].file_path);
  return (
		<div
			className="movie-info border-b border-gray-800"
			// style={{
			// 	backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.images.backdrops[6].file_path})`,
			// 	backgroundSize: "cover" , width:"100%", height:"100%", BackgroundPosition: "center",
  			// 	BackgroundRepeat: "no-repeat",  Filter: "blur(8px)",
			// }}
		>
			<div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
				<div className="flex-none w-96">
					<Image
						loader={myLoader}
						src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
						alt={`${data.title} Poster`}
						className="movie-poster w-64 lg:w-2/4 rounded-xl"
						id="movie-poster"
						width={500}
						height={750}
						unoptimized
					/>
				</div>
				<div className="md:ml-24">
					<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-semibold">
						{data.title}
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
						<span className="ml-1">{data.vote_average}</span>
						<span className="mx-2">|</span>
						<span>{data.release_date}</span>
						<span className="mx-2">|</span>
						{data.genres.map((g, i) => (
							<span key={i}>{convertBreadcrumb(g.name)} </span>
						))}
					</div>

					<p className="text-gray-300 mt-8">{data.overview}</p>

					<div className="mt-12">
						<h4 className="text-white font-semibold">Featured Crew</h4>
						<div className="flex mt-4">
							{data.credits.crew.slice(0, 3).map((crew, i) => (
								<div className="mr-8" key={i}>
									<div>{crew.name}</div>
									<div className="text-gray-400 text-sm">{crew.job}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoMovie