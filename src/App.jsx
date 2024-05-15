import { useState, useEffect } from 'react';
import './App.css';
import DisplayMeme from './components/DisplayMeme';
import Buttons from './components/Buttons';
import AddText from './components/AddText';
import TextStyling from './components/TextStyling';

function App() {
	// State to store the memes we are getting back from the API
	const [memes, setMemes] = useState([]);
	// State to create a pagination using the index of the meme
	const [page, setPage] = useState(0);
	// State to store the meme so it can be render when changing pagination
	const [meme, setMeme] = useState({});
	// State to control the adding of the text
	const [addText, setAddText] = useState(false);
	const [text, setText] = useState('');
	const [memeTextDisplay, setMemeTextDisplay] = useState({
		color: 'black',
		background: 'white',
		fontFamily: 'impact',
	});

	// Fetch from the API so it will only fetch upon mounting the component and setting the memes state to be the return data of memes
	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setMemes(data.data.memes))
			.catch((error) => console.log(error));
	}, []);

	// Changing the meme state to be the one with the index value equal to the page value.
	useEffect(() => {
		memes.length > 0 &&
			setMeme(
				memes.find((meme, index) => {
					if (index === page) return meme;
				})
			);
	}, [page, memes]);

	// Loggin the memes state to see if we are getting the correct information
	console.log(memes);
	console.log(meme);
	return (
		<>
			<h2>Create your own meme</h2>
			<div className='memeCreator'>
				{!addText ? <AddText setAddText={setAddText} /> : <TextStyling />}
				<div className='chooseMeme'>
					<Buttons page={page} setPage={setPage} memes={memes} />
					{meme && <DisplayMeme key={meme.id} meme={meme} />}
				</div>
			</div>
		</>
	);
}

export default App;
