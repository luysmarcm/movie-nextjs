import Link from 'next/link';
import CardTvShow from './CardTvShow';

const PopularShow = ({ tvshow, top }) => {
	return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-tv">
				<div className="flex flex-col-2 place-content-between">
					<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
						Popular Show Tv
					</h2>
					<Link href="/tv" passHref>
						<a className="hidden lg:block text-base hover:text-primary ">
							See all
						</a>
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{tvshow.map((show, i) => (
						<CardTvShow show={show} key={i} />
					))}
				</div>
			</div>
			<div className="py-10">
				<Link href="/tv" passHref>
					<button className="bg-primary rounded-lg hover:bg-secundary  w-auto p-2 ">
						<a className="hidden lg:block text-base ">See more</a>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PopularShow;