//newSearch function

function newSearch() {
    // Enable the save button for a new search
    let svbtn = document.getElementById("savebtn");
    svbtn.disabled = false;

    //make searchform visible after click newsearch button
    let formdiv = document.getElementById('formh');

    if (formdiv.classList.contains('disnone')) {
        formdiv.classList.remove("disnone");
    }
}

module.exports = { newSearch }

