import Link from 'next/link';


const ListSearch = ({ movies, tv, query }) => {
	return (
		<div className="bg-negro bg-opacity-80 space-y-5 rounded-xl hidden md:block overflow-hidden drop-shadow-xl w-56">
			<h3 className="text-primary p-1 font-bold text-xl text-center ">
				Search Results
			</h3>
			<ul className="flex flex-col rounded-lg text-2xl space-y-5  ">
				<li className=" p-2">
					<Link href="/search/movies">
						<div className="flex flex-row justify-between pb-5   ">
							<a className="p-1 block text-base text-white hover:text-primary text-center">
								Movies
							</a>
							<span className="bg-primary rounded-md p-1 block text-base text-white hover:text-primary text-center">
								{movies.total_results}
							</span>
						</div>
					</Link>
					<Link passHref href={`/search/tv`} >
						<div className="flex flex-row justify-between">
							<a className="p-1 block text-base text-white hover:text-primary text-center">
								Tv Shows
							</a>
							<span className="bg-primary rounded-md p-1 block text-base text-white hover:text-primary text-center">
								{tv.total_results}
							</span>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ListSearch