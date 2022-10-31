import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardMovies from '../Movies/CardMovies';

const animation = { duration: 30000, easing: (t) => t };

const Banner = ({ encartelera }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		loop: true,
		mode: "free-snap",
		breakpoints: {
			"(min-width: 150px)": {
				slides: {
					perView: 2,
					// spacing: 5,
				},
			},
			"(min-width: 768px)": {
				slides: {
					perView: 5,
					// spacing: 15,
				},
			},
			"(min-width: 1024px)": {
				slides: {
					perView: 5,
					spacing: 15,
				},
			},
		},
		slides: {
			perView: 2,
			spacing: 15,
		},
	});
	return (
		<div className="bg-fondo bg-cover bg-center  ">
			<div className="navigation-wrapper ">
				<div
					ref={sliderRef}
					className="keen-slider grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-10"
				>
					{encartelera.map((movie, i) => (
						<div className="keen-slider__slide  pb-10 drop-shadow-xl" key={i}>
							<CardMovies movie={movie} />
						</div>
					))}
				</div>
				{/* {loaded && instanceRef.current && (
				<>
					<Arrow
						left
						onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={currentSlide === 0}
					/>

					<Arrow
						onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={
							currentSlide ===
							instanceRef.current.track.details.slides.length - 1
						}
					/>
				</>
			)} */}
			</div>
		</div>
	);
};

export default Banner


function Arrow(props) {
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
	<path d="m13.707 4.707-1.414-1.414L3.586 12l8.707 8.707 1.414-1.414L6.414 12l7.293-7.293z" />
	<path d="m19.707 4.707-1.414-1.414L9.586 12l8.707 8.707 1.414-1.414L12.414 12l7.293-7.293z" />
</svg>;
