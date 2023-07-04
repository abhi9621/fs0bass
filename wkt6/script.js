// searchinput
// searchbtn
const dictionary=(word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '613a9995b7mshaaeaabf7d41ec00p152cc2jsn283afafcc7a1',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	fetch(url, options)
	.then (response=>response.json())
    .then((response)=>{
        console.log(response)
        wordhead.innerHTML="Meaning of:"+response.word;
        definition.innerHTML=response.definition.replace("1.","<br>1.").replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");

    })
	
} catch (error) {
	console.error(error);
}
}
 searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
 })