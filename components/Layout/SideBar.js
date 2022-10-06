import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const SideBar = () => {
  return (
		<nav className=" bg-black px-8 py-4 flex items-center justify-between w-full">
			<div className="relative flex items-center justify-between w-full">
				<Link href="/" passHref>
					<div style={{ width: "210px" }}>
						<Image
							src="/image/nm_logo.png"
							alt="Logo"
							width="710"
							height="84"
						/>
					</div>
				</Link>
				<div className="hidden lg:flex lg:flex-row space-x-4">
					<Link href="/">
						<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							Home
						</a>
					</Link>
					<div className="subnav">
						<button className="subnavbtn px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							<Link href="/movies">
								<a>Movies</a>
							</Link>
						</button>
						<div className="subnav-content bg-black py-5 rounded-lg">
							<ul className="flex flex-col rounded-lg text-2xl space-y-3 px-4">
								<li>
									<Link href="/movies/now-playing" passHref>
										<a className="block text-xl hover:text-primary">
											Now playing
										</a>
									</Link>
								</li>
								<li>
									<Link href="/movies/upcoming" passHref>
										<a className="block text-xl hover:text-primary">Upcoming</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="subnav">
						<button className="subnavbtn px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							<Link href="/tv">
								<a>Tv Show</a>
							</Link>
						</button>
						<div className="subnav-content bg-black py-5 rounded-lg">
							<ul className="flex flex-col  rounded-lg text-2xl space-y-3  px-4">
								<li>
									<Link href="/tv/on_the_air" passHref>
										<a className="block text-xl hover:text-primary">
											On the air
										</a>
									</Link>
								</li>
								<li>
									<Link href="/tv/top-tv-show" passHref>
										<a className="block text-xl hover:text-primary">
											Top tv show
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<Link href="/people">
						<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							People
						</a>
					</Link>
					<Link href="/marvel-universe">
						<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							Marvel Universe
						</a>
					</Link>
					<Link href="/dc-universe">
						<a className="px-3 py-2 rounded-md text-md lg:text-xl text-white hover:text-primary">
							DC Comic Universe
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default SideBar;