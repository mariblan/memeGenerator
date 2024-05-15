import OneText from "./OneText";
function DisplayMeme({meme}) {
  return (
    <div className="displayMeme">
            <img src={meme.url} alt={meme.id} />
            <OneText />
    </div>
  )
}

export default DisplayMeme