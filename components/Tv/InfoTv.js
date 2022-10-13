/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal"
import TabsTvInfo from "./TabsTvInfo";

const myLoader = ({ src }) => {
	return `${src}`;
};
const InfoTv = ({ data, recommendations }) => {
	const [showModal, setshowModal] = useState(false);
	return (
		<div
			className="tv-info border-b border-primary  "
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.images.backdrops[0].file_path})`,
				backgroundSize: "cover",
				BackgroundPosition: "center",
			}}
		>
			<div className="container mx-auto px-4 py-16 flex flex-col md:flex-row container1 w-full">
				<div className="flex-none  w-96">
					<Image
						loader={myLoader}
						src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
						alt={data.name}
						className="movie-poster w-64 lg:w-96 rounded-xl"
						id="tv-poster"
						width={500}
						height={750}
						unoptimized
					/>
					<div className="mt-12">
						<button
							type="button"
							className="border-2 rounded-lg p-2 w-28 lg:w-full font-quick bg-secundary font-bold text-white hover:bg-primary hover:text-fondo"
							onClick={() => setshowModal(true)}
						>
							Ver Trailer
						</button>
						<Modal
							movie={data}
							showModal={showModal}
							setshowModal={setshowModal}
						/>
					</div>
				</div>
				<div className="md:ml-24">
					<h2 className="text-4xl mt-4 md:mt-0 font-semibold">{data.name}</h2>
					<div className="flex flex-wrap items-center text-gray-400 text-sm">
						<svg className="fill-current text-primary w-4" viewBox="0 0 24 24">
							<g data-name="Layer 2">
								<path
									d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
									data-name="star"
								/>
							</g>
						</svg>
						<span className="ml-1">{data.vote_average}</span>
						<span className="mx-2">|</span>
						<span>{data.first_air_date}</span>
						<span className="mx-2">|</span>
						{data.genres.map((g, i) => (
							<span key={i}>{g.name} &nbsp;</span>
						))}
					</div>

					<p className="text-xl mt-8">{data.overview}</p>

					<div className="mt-12">
						<table>
							<thead>
								<tr>
									<th>Network</th>
									<th>Seasons</th>
									<th>Episodes</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{data.networks.map((n, i) => (
											<div
												className="flex-none"
												key={i}
												style={{ width: "100px" }}
											>
												<img
													src={`https://image.tmdb.org/t/p/original/${n.logo_path}`}
													alt={data.name}
													// className="text-white"
													width={500}
													height={133}
												/>
											</div>
										))}
									</td>
									<td>{data.number_of_seasons}</td>
									<td>{data.number_of_episodes}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="mt-12">
						<TabsTvInfo data={data} recommendations={recommendations} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoTv;