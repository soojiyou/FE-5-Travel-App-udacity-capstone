// const fetch = require('node-fetch');
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function pixabay(city, country, key) {
    const baseurl = 'https://pixabay.com/api/';
    const searchterm = `${city}`;
    const apikey = key;
    console.log(searchterm);
    const options = `?key=${apikey}&q=${searchterm}&image_type=photo`;
    const searchurl = baseurl + options;
    let response = await fetch(searchurl);

    console.log('Pixabay API: ', response.status, response.ok);


    if (response.ok) {
        let data = await response.json();
        if (data.hits.length > 0) {

            result = data.hits[0];
            //console.log(result);
            // try {
            //     return result.webformatURL;
            // } catch (error) {
            //     return error;
            // }
            try {

                return {
                    webformatURL: result.webformatURL,
                    tags: result.tags,
                    pageURL: result.pageURL,
                    type: result.type
                }
            } catch (error) {
                return error;
            };
            //return result;

        }

    } else {
        console.log(`Error: ${response.status} ${response.statusText}`);
    }
}
module.exports = { pixabay };