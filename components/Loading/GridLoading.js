import React from 'react'
import CardLoading from './CardLoading';

const GridLoading = () => {
  return (
		<div className="container mx-auto px-4 pt-16 mb-16">
			<div className="popular-movies">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold">
					Popular Movies
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					<CardLoading/>
				</div>
			</div>
		</div>

		// <div className="bg-negro rounded-xl w-full h-full overflow-hidden drop-shadow-md flex flex-col flex-1 animate-pulse ">
		// 	<div className="w-full rounded-lg shadow-lg">
		// 		<div className="w-full h-56 rounded-tl-lg rounded-tr-lg bg-gray-400 animate-pulse"></div>
		// 		<div className="p-10 grid grid-cols-1 w-3/5 gap-3">
		// 			<div className="col-span-3 h-2 rounded-md bg-gray-400 animate-pulse"></div>
		// 			<div className="col-span-1 h-2 rounded-md bg-gray-400 animate-pulse"></div>
		// 			<div className="col-span-4 h-2 rounded-md bg-gray-400 animate-pulse"></div>
		// 			<div className="col-span-1 h-2 rounded-md bg-gray-400 animate-pulse"></div>
		// 			<div className="col-span-3 h-2 rounded-md bg-gray-400 animate-pulse"></div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default GridLoading;