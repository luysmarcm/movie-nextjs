import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
		<footer className="bg-black">
			<div className="container text-white mx-auto text-sm px-4 py-6 hover:text-primary">
				Powered by{" "}
				<Link
					href="https://www.themoviedb.org/documentation/api"
					target="_blank"
					className="underline "
				>
					TMDb API
				</Link>
			</div>
			
		</footer>
	);
}

export default Footer