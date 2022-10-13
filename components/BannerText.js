import React from 'react'

const BannerText = () => {
  return (
		<div
			class="grid-container w-full h-full"
			style={{
				backgroundImage: `url("./image/mavel-universe.webp")`,
			}}
		>
			<div class="banner-text p-52 container1">
				<h1>
					<span class="reveal font-bold text-8xl">
						Marvel Cinematic
						<br />
					</span>{" "}
					<span class="reveal-2 font-bold text-8xl">Universe</span>
				</h1>
			</div>
		</div>
	);
}

export default BannerText