import Image from 'next/image';
import React from 'react'

const myLoader = ({ src }) => {
	return `${src}`;
};

const CardSeasons = ({ season, data }) => {
    console.log(season);
	return (
				<div className="max-w-md  mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
					<div className="md:flex">
						<div className="md:flex-shrink-0 w-60">
							<Image
								loader={myLoader}
								src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
								alt={season.name}
								className="movie-poster w-64 lg:w-96 rounded-xl"
								id="tv-poster"
								width={500}
								height={750}
								unoptimized
							/>
						</div>
						<div className="p-8">
							<div className="uppercase tracking-wide text-sm font-semibold">
								{season.name}
							</div>
							<p
								className="block mt-1 text-lg leading-tight font-medium hover:underline"
							>
								{season.air_date} | {season.episode_count} episodes
							</p>
							<p className="mt-2">{season.overview} {data.overview}</p>
						</div>
					</div>
				</div>
		
	);
};

export default CardSeasons;