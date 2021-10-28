
const wordApi = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=gbp3jmy2m9wyeojiojcdg91zc4nbeuqo6x8nxs6jl17bskx9n"
const giphyApi = "https://api.giphy.com/v1/gifs/search?api_key=WrnQtUVDzXciVrodWe361DCnXV4CM1iL&q="



async function wordgif() {
    let response1 = await fetch(wordApi)
    let json1 = await response1.json()    
    let response2 = await fetch(giphyApi+json1.word)
    let json2 =  await response2.json()
    console.log(json2)
    return {
        word: json1.word,
        img : json2.data[0].images['fixed_height'].url 
    }
}


wordgif().then(result => {
    document.getElementById('word').innerHTML = result.word
    document.getElementById('img').innerHTML = '<img src="'+result.img+'" />';
}).catch(err => console.error(err))