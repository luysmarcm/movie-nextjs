import CardPeople from "./CardPeople";

const PopularPeople = ({ popularPeople }) => {
	return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-movies">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					Popular People
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{popularPeople.results.map((p, i) => (
						<CardPeople person={p} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularPeople;
