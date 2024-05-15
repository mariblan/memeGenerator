
function AddText({ setAddText }) {
	const addTextElement = (e) => {
		console.log('click');
		setAddText(true);
	};
	return (
		<div className='addTextBtn'>
			<button onClick={addTextElement}>Insert text</button>
		</div>
	);
}

export default AddText;
