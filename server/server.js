import InstagramCrawler from './src/InstagramCrawler';

let instagram = new InstagramCrawler;

instagram.auth('naptunesailor', 'naptune123#sailor')
    .then(user => {
		console.log(user);
    })
    .catch(error => console.error(error));