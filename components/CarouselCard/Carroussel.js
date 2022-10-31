import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import CardMovies from "../Movies/CardMovies";

const Carroussel = ({ data }) => {
	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 30,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		// variableWidth: true,
		beforeChange: (current, next) => setImageIndex(next),
	};

	return (
		<div className="px-36">
			<Slider {...settings}>
				{data.map((movie, idx) => (
					<div
						className={idx === imageIndex ? "slide activeSlide" : "slide"}
						key={idx}
					>
						<CardMovies movie={movie} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carroussel;
