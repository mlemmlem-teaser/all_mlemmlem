const url = 'https://nsfw-and-nudity-detector.p.rapidapi.com/ping';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559',
		'X-RapidAPI-Host': 'nsfw-and-nudity-detector.p.rapidapi.com'
	}
};

try {
    const bruh = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    }
    bruh();

} catch (error) {
	console.error(error);
}