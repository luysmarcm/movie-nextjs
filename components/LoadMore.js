import React from 'react'

const LoadMore = ({ hasNext, loadMoreItems, loading, counts }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{hasNext ? (
				<button
					className="button bg-secundary rounded-r-md w-auto p-2"
					onClick={loadMoreItems}
					disabled={loading} // disable button when fetching results
				>
					Load More
				</button>
			) : (
				<div>
					Showing {counts.total_results} of {counts.total_results} Movies
				</div>
			)}
		</div>
	);
};

export default LoadMore;