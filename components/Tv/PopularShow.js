import CardTvShow from './CardTvShow';

const PopularShow = ({ tvshow, top }) => {
	return (
		<div className="container mx-auto px-4 pt-16">
			<div className="top-rated-shows py-24">
				<h2 className="uppercase tracking-wider text-secundary text-2xl	 font-semibold">
					Top Rated Shows
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{top.results.map((show, i) => (
						<CardTvShow show={show} key={i} />
					))}
				</div>
			</div>
			<div className="popular-tv">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					Popular Shows
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{tvshow.results.map((show, i) => (
						<CardTvShow show={show} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularShow;