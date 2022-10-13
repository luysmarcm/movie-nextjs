/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import CardSeasons from './CardSeasons';
import CardTvShow from './CardTvShow';
import CastTv from './CastTv';

const TabsTvInfo = ({ data, recommendations }) => {
	useEffect(() => {
		let tabsContainer = document.querySelector("#tabs");

		let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
		tabTogglers.forEach(function (toggler) {
			toggler.addEventListener("click", function (e) {
				e.preventDefault();

				let tabName = this.getAttribute("href");

				let tabContents = document.querySelector("#tab-contents");

				for (let i = 0; i < tabContents.children.length; i++) {
					tabTogglers[i].parentElement.classList.remove(
						"border-t",
						"border-r",
						"border-l",
						"-mb-px",
						"bg-primary"
					);
					tabContents.children[i].classList.remove("hidden");
					if ("#" + tabContents.children[i].id === tabName) {
						continue;
					}
					tabContents.children[i].classList.add("hidden");
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

    console.log(data.seasons);
	return (
		<div className="rounded border-4 bg-black">
			<ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b">
				<li className="bg-primary px-4 font-semibold py-2 rounded-t border-t border-r border-l -mb-px">
					<a id="default-tab" href="#first">
						Cast
					</a>
				</li>
				<li className="px-4  font-semibold py-2 rounded-t">
					<a href="#second"> Featured Crew</a>
				</li>
				<li className="px-4  font-semibold py-2 rounded-t">
					<a href="#third">Seasons</a>
				</li>
				<li className="px-4  font-semibold py-2 rounded-t">
					<a href="#fourth">Recommendations</a>
				</li>
			</ul>
			<div id="tab-contents">
				<div id="first" className="p-4">
					<CastTv data={data} />
				</div>
				<div id="second" className="hidden p-4">
					<div className="flex mt-4">
						{data.credits.crew.slice(0, 3).map((crew, i) => (
							<div className="mr-8" key={i}>
								<div>{crew.name}</div>
								<div className="text-gray-400 text-sm">{crew.job}</div>
							</div>
						))}
					</div>
				</div>
				<div id="third" className="hidden p-4">
					<div className="flex mt-4">
						<div className="flex flex-col">
							{data.seasons.map((season, i) => (
								<div className="" key={i}>
									<CardSeasons season={season} data={data} />
								</div>
							))}
						</div>
					</div>
				</div>
				<div id="fourth" className="hidden p-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{recommendations.results.slice(0, 5).map((show, i) => (
							<CardTvShow show={show} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabsTvInfo