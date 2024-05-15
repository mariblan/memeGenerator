function TextStyling() {
	return (
		<form className="addTextForm">
			<div>
				<label htmlFor='fontColor'>Color:</label>
				<select name='fontColor' id='fontColor'>
					<option value='red'>red</option>
					<option value='blue'>blue</option>
					<option value='black'>black</option>
					<option value='white'>white</option>
					<option value='yellow'>yellow</option>
					<option value='orange'>orange</option>
					<option value='pink'>pink</option>
					<option value='purple'>purple</option>
				</select>
			</div>
			<div>
				<label htmlFor='align'>Aligment:</label>
				<div>
                    <input type="radio" id="left" name="horizontal" />
					<label htmlFor='left'>Left</label>
                    <input type="radio" id="center" name="horizontal" />
					<label htmlFor='center'>Center</label>
                    <input type="radio" id="right" name="horizontal" />
					<label htmlFor='right'>Right</label>
				</div>
                <div>
                    <input type="radio" id="top" name="vertical" />
                    <label htmlFor="top">Top</label>
                    <input type="radio" id="middle" name="vertical" />
                    <label htmlFor="middle">Middle</label>
                    <input type="radio" id="bottom" name="vertical" />
                    <label htmlFor="bottom">Bottom</label>
                </div>
			</div>
            <button>Save</button>
		</form>
	);
}

export default TextStyling;
