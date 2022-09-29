import CardMovies from './Movies/CardMovies';
import CardTvShow from './Tv/CardTvShow';

const ResultsSearch = ({ movies, tv, pathname}) => {
	return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-movies">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					Results
				</h2>
				{pathname === "/search/movies" ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{movies.results.map((movie) => (
							<CardMovies movie={movie} key={movie.id} />
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{tv.results.map((show) => (
							<CardTvShow show={show} key={show.id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ResultsSearch