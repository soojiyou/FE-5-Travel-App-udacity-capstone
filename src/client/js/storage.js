// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

// var storedValue = localStorage.getItem("email");

function store() {
    const cityname = document.getElementById("travelresult");
    const destitle = document.getElementById("cityinfo");
    const departdate = document.getElementById("traveldepart");
    console.log(cityname, destitle, departdate);

    localStorage.setItem("cityname", cityname.value);
    localStorage.setItem("destitle", destitle.value);
    localStorage.setItem("departdate", departdate.value);
    //displaysave();

}

// function displaysave() {
//     let storedcity = localStorage.getItem("cityname");
//     let storedtitle = localStorage.getItem("destitle");
//     let storeddate = localStorage.getItem("departdate");
//     const createDiv = document.createElement('div');
//     const divfortrip = document.getElementsByClassName('save');
//     createDiv.classList.add("card");
//     divfortrip.appendChild(createDiv);
//     createDiv.innerHTML = `My Trips:` + "/n" +
//         storedcity + "/n" +
//         storedtitle + "/n" +
//         storeddate;
// }






module.exports = {
    store

};