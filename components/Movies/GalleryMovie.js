import Image from "next/image";
import { useEffect } from "react";

const myLoader = ({ src }) => {
	return `${src}`;
};


const GalleryMovie = ({data}) => {

	useEffect(() => {
		let tabsContainer2 = document.querySelector("#tabs2");
		let tabTogglers2 = tabsContainer2.querySelectorAll("#tabs2 a");
		tabTogglers2.forEach(function (toggler) {
			toggler.addEventListener("click", function (e) {
				e.preventDefault();

				let tabName2 = this.getAttribute("href");

				let tabContents2 = document.querySelector("#tab-contents2");

				for (let i = 0; i < tabContents2.children.length; i++) {
					tabTogglers2[i].parentElement.classList.remove(
						"border-t",
						"border-r",
						"border-l",
						"-mb-px",
						"bg-primary"
					);
					tabContents2.children[i].classList.remove("hidden");
					if ("#" + tabContents2.children[i].id === tabName2) {
						continue;
					}
					tabContents2.children[i].classList.add("hidden");
				}
				e.target.parentElement.classList.add(
					"border-t",
					"border-r",
					"border-l",
					"-mb-px",
					"bg-primary"
				);
			});
		});
	}, []);
  return (
		<div className="movie-images" x-data="{ isOpen: false, image: ''}">
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-4xl font-semibold">Gallery</h2>
				<div className="rounded border-4 mt-12">
					<ul id="tabs2" className="inline-flex pt-2 px-1 w-full border-b">
						<li className="bg-primary px-4 text-white font-semibold py-2 rounded-t border-t border-r border-l -mb-px">
							<a id="default-tab" href="#1">
								Images
							</a>
						</li>
						<li className="px-4 text-white  font-semibold py-2 rounded-t">
							<a href="#2">Posters</a>
						</li>
					</ul>
					<div id="tab-contents2">
						<div id="1" className="p-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
								{data.images.backdrops.slice(0, 9).map((image, i) => (
									<div className="mt-8" key={i}>
										<Image
											loader={myLoader}
											src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
											loading="lazy"
											alt={data.name}
											className="hover:opacity-75 transition ease-in-out duration-150 rounded-xl"
											width={500}
											height={281}
											unoptimized
										/>
									</div>
								))}
							</div>
						</div>
						<div id="2" className="hidden p-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
								{data.images.posters.slice(0, 9).map((image, i) => (
									<div className="mt-8" key={i}>
										<Image
											loader={myLoader}
											src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
											loading="lazy"
											alt={data.name}
											className="hover:opacity-75 transition ease-in-out duration-150 rounded-xl"
											width={500}
											height={750}
											unoptimized
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GalleryMovie