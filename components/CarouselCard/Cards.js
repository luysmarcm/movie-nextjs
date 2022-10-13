import React from "react";

const Cards = ({ info, imageIndex, idx }) => {
	return (
		<div
			style={{
				backgroundColor: `${info.color}`,
				backgroundSize: "cover",
				BackgroundPosition: "center",
			}}
		>
			<img src={info.img} alt="wizard" />

			<div class="">Level 6</div>
			<div class="">{info.nombre}</div>
			<div class="">{info.nombre}</div>

			<div class="">
				<div class="">
					<div class="">
						5<sup>M</sup>
					</div>
					<div class="stat-value">Training</div>
				</div>

				<div class="">
					<div class="stat">16</div>
					<div class="stat-value">Speed</div>
				</div>

				<div class="">
					<div class="stat">4000</div>
					<div class="stat-value">Cost</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
