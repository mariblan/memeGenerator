function Buttons({ page, setPage, memes }) {
	const handleBack = () => {
		if (page > 0) {
			setPage((prev) => prev - 1);
		}
	};
	const handleNext = () => {
		if (page < memes.length) {
			setPage((prev) => prev + 1);
		}
	};
	return (
		<div className='buttons'>
			<button onClick={handleBack} disabled={page === 0 ? true : false }>Back</button>
			<h3>{page + 1}</h3>
			<button onClick={handleNext} disabled={page === memes.length - 1 ? true : false }>Next</button>
		</div>
	);
}

export default Buttons;
