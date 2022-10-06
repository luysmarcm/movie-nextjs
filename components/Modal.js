const Modal = ({ showModal, setshowModal, movie }) => {
	
	return (
		<>
			{showModal ? (
				<div className="max-w-max min-w-min p-6 justify-center flex fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg  md:px-2 lg:px-4 lg:justify-center overflow-hidden">
					<div className="relative md:w-1/2 lg:w-auto  xl:w-4/5 ">
						<div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none justify-center border-white">
							<div className="p-20">
								<div>
									<div
									class="aspect-w-16 aspect-h-9"
									>
										<iframe
											className=""
											src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}    
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
								</div>
								<button
									type="button"
									className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
									onClick={() => setshowModal(false)}
								>
									<span className="sr-only">Close</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
