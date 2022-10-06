import Link from 'next/link';
import CardMovies from './CardMovies';


const PopularMovie = ({ popularMovies }) => {
	return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-movies">
				<div className="flex flex-col-2 place-content-between">
					<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
						Popular Movies
					</h2>
					<Link href="/movies" passHref>
						
							<a className="hidden lg:block text-base hover:text-primary ">See all</a>
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{popularMovies.map((movie, i) => (
						<CardMovies movie={movie} key={i} />
					))}
				</div>
			</div>
			<div className="py-10">
				<Link href="/movies" passHref>
					<button className="bg-primary rounded-lg hover:bg-secundary  w-auto p-2 ">
						<a className="hidden lg:block text-base ">See more</a>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PopularMovie


