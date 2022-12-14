import CardTvShow from './CardTvShow';

const OnAir = ({onair}) => {
  return (
		<div className="container mx-auto px-4 pt-16">
			<div className="popular-tv">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					On Tv
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{onair.results.map((show, i) => (
						<CardTvShow show={show} key={i} />
					))}
				</div>
			</div>
		</div>
	);
}

export default OnAir;