import Image from 'next/image';
import Link from 'next/link';

const myLoader = ({ src }) => {
	return `${src}`;
};

const CastTv = ({data}) => {
  return (
		<div className=" border-b border-primary">
			<div className="container mx-auto px-4 py-16 ">
				<h2 className="text-4xl font-semibold">Cast</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{data.data.credits.cast.slice(0, 5).map((cast, i) => (
						<div className="mt-8" key={i}>
							<Link passHref href={`/people/${cast.id}`}>
								<Image
									loader={myLoader}
									id={`person-photo-${cast.id}`}
									src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
									alt={cast.name}
									className="thumbnail hover:opacity-75 transition ease-in-out duration-150 rounded-xl"
									width={500}
									height={750}
									unoptimized
								/>
							</Link>
							<div className="mt-2">
								<Link href={`/people/${cast.id}`} passHref>
									<a className="text-lg mt-2 hover:text-gray:300">
										{cast.name}
									</a>
								</Link>
								<div className="text-sm text-gray-400">{cast.character}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default CastTv