import CardMovies from './CardMovies';


const PopularMovie = ({ popularMovies }) => {
	return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-movies">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					Popular Movies
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{popularMovies.results.map((movie, i) => (
						<CardMovies movie={movie} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularMovie