import Image from "next/image";

const myLoader = ({ src }) => {
	return `${src}`;
};

const GalleryTv = ({data}) => {
  return (
		<div className="movie-images" x-data="{ isOpen: false, image: ''}">
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-4xl font-semibold">Images</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{data.data.images.backdrops.slice(0, 9).map((image, i) => (
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
		</div>
	);
}

export default GalleryTv;