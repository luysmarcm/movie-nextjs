import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Movies",
		path: "/movies",
	},
	{
		title: "Tv Show",
		path: "/tv",
	},
	{
		title: "People",
		path: "/people",
	},
	{
		title: "Marvel Universe",
		path: "/marvel-universe",
	},
	{
		title: "DC Comic Universe",
		path: "/dc-universe",
	},
];

const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		setisSideMenuOpen(!isSideMenuOpen);
	};

	const [isSideMenuOpenD, setisSideMenuOpenD] = useState(false);

	const showSideMenuD = () => {
		setisSideMenuOpenD(!isSideMenuOpenD);
	};

	return (
		// <nav className="bg-black px-8 py-4 flex items-center justify-between w-full">
		// 	<div className="relative flex items-center justify-between w-full">
		// 		<Link href="/" passHref>
		// 			<div style={{ width: "210px" }}>
		// 				<Image
		// 					src="/image/nm_logo.png"
		// 					alt="Logo"
		// 					width="710"
		// 					height="84"
		// 				/>
		// 			</div>
		// 		</Link>
		// 		<div className="flex  lg:content-center justify-between md:w-1/2 md:justify-end">
		// 			<div className="hidden lg:flex lg:flex-row space-x-4">
		// 				{/* {links.map((item) => (
		// 				<a
		// 					key={item.title}
		// 					href={item.path}
		// 					className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
		// 				>
		// 					{item.title}
		// 				</a>
		// 			))} */}

		// 				<Link href="/">
		// 					<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
		// 						Home
		// 					</a>
		// 				</Link>
		// 				<button
		// 					aria-label="Abrir menu"
		// 					onClick={() => {
		// 						showSideMenu();
		// 					}}
		// 					className="lg:w-full text-sm  text-center inline-flex items-center relative"
		// 				>
		// 					<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
		// 						Movies
		// 					</a>
		// 					<svg
		// 						className="w-4 h-4 ml-2"
		// 						fill="none"
		// 						stroke="currentColor"
		// 						viewBox="0 0 24 24"
		// 						xmlns="http://www.w3.org/2000/svg"
		// 					>
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M19 9l-7 7-7-7"
		// 						/>
		// 					</svg>
		// 				</button>
		// 				<div
		// 					className={`transition-all duration-500 absolute  bg-black  overflow-hidden z-10 translate-y-10  ${
		// 						isSideMenuOpen ? "h-auto" : "h-0"
		// 					}`}
		// 				>
		// 					<ul className="flex flex-col p-10 px-10 rounded-lg text-2xl space-y-3">
		// 						<li>
		// 							<Link href="/movies/now-playing" passHref>
		// 								<a className="block text-base hover:text-primary">
		// 									Now playing
		// 								</a>
		// 							</Link>
		// 							<Link href="/movies/upcoming" passHref>
		// 								<a className="block text-base hover:text-primary">
		// 									Upcoming
		// 								</a>
		// 							</Link>
		// 						</li>
		// 					</ul>
		// 				</div>
		// 				<>
		// 					<button
		// 						aria-label="Abrir menu"
		// 						onClick={() => {
		// 							showSideMenu();
		// 						}}
		// 						className="lg:w-full text-sm  text-center inline-flex items-center relative"
		// 					>
		// 						<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
		// 							Tv
		// 						</a>
		// 						<svg
		// 							className="w-4 h-4 ml-2"
		// 							fill="none"
		// 							stroke="currentColor"
		// 							viewBox="0 0 24 24"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								strokeLinecap="round"
		// 								strokeLinejoin="round"
		// 								strokeWidth={2}
		// 								d="M19 9l-7 7-7-7"
		// 							/>
		// 						</svg>
		// 					</button>
		// 					<div
		// 						className={`transition-all duration-500 absolute  bg-black  overflow-hidden z-10 translate-y-10  ${
		// 							isSideMenuOpen ? "h-auto" : "h-0"
		// 						}`}
		// 					>
		// 						<ul className="flex flex-col p-10 px-10 rounded-lg text-2xl space-y-3">
		// 							<li>
		// 								<Link href="/tv/on_the_air" passHref>
		// 									<a className="block text-base hover:text-primary">
		// 										On the air
		// 									</a>
		// 								</Link>
		// 							</li>
		// 							<li>
		// 								<Link href="/tv/top-tv-show" passHref>
		// 									<a className="block text-base hover:text-primary">
		// 										Top tv show
		// 									</a>
		// 								</Link>
		// 							</li>
		// 						</ul>
		// 					</div>
		// 				</>
		// 			</div>
		// 			<button
		// 				aria-label="Abrir menu"
		// 				onClick={() => {
		// 					showSideMenu();
		// 				}}
		// 				className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
		// 			>
		// 				<svg style={{ width: "100%", height: "100%" }} viewBox="0 0 20 20">
		// 					<path
		// 						fill="currentColor"
		// 						d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
		// 					/>
		// 				</svg>
		// 			</button>

		// 			<div
		// 				className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden bg-black left-0 top-16 overflow-hidden  ${
		// 					isSideMenuOpen ? "h-auto" : "h-0"
		// 				}`}
		// 			>
		// 				<ul className="flex flex-col p-10 text-2xl space-y-3">
		// 					{links.map((item) => (
		// 						<li key={item.title}>
		// 							<a
		// 								href={item.path}
		// 								className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
		// 							>
		// 								{item.title}
		// 							</a>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>

		<nav className="backdrop-blur-xl bg-white/30  p-2 lg:p-2 mt-0 fixed w-full z-10 top-0 shadow-lg">
			<div className=" mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-white font-extrabold	">
					<Link href="/" passHref>
						<div style={{ width: "150px" }}>
							<Image
								src="/image/logo1.png"
								alt="Logo"
								width="384"
								height="126"
							/>
						</div>
					</Link>
				</div>
				<div className="flex  lg:content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						
					</ul>

					{/* <div className="hidden lg:flex lg:flex-row space-x-4">
						<Link href="/">
							<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
								Home
							</a>
						</Link>
						<button
							aria-label="Abrir menu"
							onClick={() => {
								showSideMenu();
							}}
							className="lg:w-full text-sm  text-center inline-flex items-center relative"
						>
							<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
								Movies
							</a>
							<svg
								className="w-4 h-4 ml-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div
							className={`transition-all duration-500 absolute  bg-black  overflow-hidden z-10 translate-y-10  ${
								isSideMenuOpen ? "h-auto" : "h-0"
							}`}
						>
							<ul className="flex flex-col p-10 px-10 rounded-lg text-2xl space-y-3">
								<li>
									<Link href="/movies/now-playing" passHref>
										<a className="block text-base hover:text-primary">
											Now playing
										</a>
									</Link>
									<Link href="/movies/upcoming" passHref>
										<a className="block text-base hover:text-primary">
											Upcoming
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<>
							<button
								aria-label="Abrir menu"
								onClick={() => {
									showSideMenu();
								}}
								className="lg:w-full text-sm  text-center inline-flex items-center relative"
							>
								<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
									Tv
								</a>
								<svg
									className="w-4 h-4 ml-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<div
								className={`transition-all duration-500 absolute  bg-black  overflow-hidden z-10 translate-y-10  ${
									isSideMenuOpen ? "h-auto" : "h-0"
								}`}
							>
								<ul className="flex flex-col p-10 px-10 rounded-lg text-2xl space-y-3">
									<li>
										<Link href="/tv/on_the_air" passHref>
											<a className="block text-base hover:text-primary">
												On the air
											</a>
										</Link>
									</li>
									<li>
										<Link href="/tv/top-tv-show" passHref>
											<a className="block text-base hover:text-primary">
												Top tv show
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</>
					</div> */}
					<button
						aria-label="Abrir menu"
						onClick={() => {
							showSideMenu();
						}}
						className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
					>
						<svg style={{ width: "100%", height: "100%" }} viewBox="0 0 20 20">
							<path
								fill="currentColor"
								d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
							/>
						</svg>
					</button>
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden   bg-white left-0 top-16 overflow-hidden  ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-10 text-2xl space-y-3">
							{/* {links.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="px-3 py-2 rounded-md text-md lg:text-lg text-black hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							))} */}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
