import Link from 'next/link';
import React from 'react'

const Credits = ({ data }) => {
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
	return (
		<div className="credits border-b border-gray-800">
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-4xl font-semibold">Credits</h2>
				<ul className="list-disc leading-loose pl-5 mt-8">
					{credits.map((credit, i) => (
						<li key={i}>
							{credit.release_year} &middot;
							<strong>
								<Link href={credit.linkToPage} passHref>
									<a className="hover:underline">{credit.title}</a>
								</Link>
							</strong>
							&nbsp; as {credit.character}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Credits