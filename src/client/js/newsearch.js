//newSearch function

function newSearch() {
    //make searchform visible after click newsearch button
    let formdiv = document.getElementById('formh');
    //let resultdiv = document.getElementById('resulth');
    //formdiv.classList.remove("disnone");
    //resultdiv.classList.add("disnone");
    if (formdiv.classList.contains('disnone')) {
        formdiv.classList.remove("disnone");
    }
}

module.exports = { newSearch }

