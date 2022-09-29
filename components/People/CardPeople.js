import Image from 'next/image';
import Link from 'next/link';

const myLoader = ({ src }) => {
	return `${src}`;
};

const CardPeople = ({ person }) => {
	return (
		<div className="mt-8">
			<Link passHref href={`/people/${person.id}`}>
				<Image
					loader={myLoader}
					src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
					alt={`${person.name} Poster`}
					className="thumbnail hover:opacity-75 transition ease-in-out duration-150 rounded-xl"
					id={`person-profile-${person.id}`}
					width={500}
					height={750}
					unoptimized
				/>
			</Link>
			<div className="mt-2">
				<Link passHref href={`/people/${person.id}`}>
					<a className="text-lg mt-2 hover:text-gray-300">{person.name}</a>
				</Link>
			</div>
		</div>
	);
};

export default CardPeople