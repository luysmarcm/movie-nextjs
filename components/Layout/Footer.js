import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
		<footer>
			<div className="container mx-auto text-sm px-4 py-6">
				Powered by{" "}
				<Link
					href="https://www.themoviedb.org/documentation/api"
					target="_blank"
					className="underline hover:text-gray-300"
				>
					TMDb API
				</Link>
			</div>
		</footer>
	);
}

export default Footer