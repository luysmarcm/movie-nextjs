const SearchMenu = ({ mode, value, onChange }) => {
	return (
		<div className="searchMenu">
			<form className="form container mx-auto px-4 pt-16">
				<h2 className="uppercase tracking-wider text-secundary text-2xl font-semibold py-4">
					Search
				</h2>
				<input
					value={value}
					placeholder="Search"
					allowClear
					style={{ width: 400 }}
					onChange={(e) => onChange(e.target.value)}
					size="large"
					className="input p-2 w-96 text-base font-normal text-white bg-primary bg-clip-padding bg-no-repeat border-solid focus:outline-none rounded-md placeholder-white m-0 hover:bg-secundary"
				/>
			</form>
		</div>
	);
};
export default SearchMenu;
