//main function action with click save button
async function store() {
    //get result data to modify to save information
    const request = await fetch('/result');
    const data = await request.json();
    const departuredate = data.date;
    console.log('departday', departuredate);

    //select data to save
    const item1 = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
    const item2 = `Destination Information:`;
    const item3 = `Departing: ${data.date}`;
    console.log(item1, item2, item3);

    // let arrayinfoinput = `${item1}, ${item3}`;
    let arrayinfoinput = [item1, item3];

    // Retrieve the existing savedTrips from localStorage
    let savedTrips = JSON.parse(window.localStorage.getItem('savedTrips')) || [];

    // Add the new trip to savedTrips
    savedTrips.push(arrayinfoinput);

    // Store the updated savedTrips back in localStorage
    window.localStorage.setItem('savedTrips', JSON.stringify(savedTrips));

    let saveLi = document.getElementById('saveLi');
    let svbtn = document.getElementById("savebtn");
    svbtn.disabled = true; // disable the save button after it's clicked
    displaysave(arrayinfoinput);
    createdelbtn();
    createprintbtn();
}



function showSavedTrip() {
    let savedtrip = document.getElementById('savedtrip');

    if (savedtrip.classList.contains("disflex")) {
        // If the saved trip element is already displayed, hide it
        savedtrip.classList.remove("disflex");
        savedtrip.classList.add("disnone");
    } else {
        // If the saved trip element is hidden, show it

        // Remove all existing saved trip divs
        savedtrip.innerHTML = "";

        // Get all saved trips from localStorage
        let savedTrips = JSON.parse(window.localStorage.getItem('savedTrips'));

        // Check if there are any saved trips
        if (savedTrips && savedTrips.length > 0) {
            // Loop through saved trips and create a new div for each
            savedTrips.forEach(trip => {

                // Create a new div element for this saved trip
                let createSavedDiv = document.createElement('div');
                createSavedDiv.setAttribute('class', 'savedDiv');
                savedtrip.appendChild(createSavedDiv);

                // Create a new div element to hold the saved information for this trip
                let createSavedLi = document.createElement('div');
                createSavedLi.setAttribute('class', 'savedLi');
                createSavedDiv.appendChild(createSavedLi);

                // Create a new div element to hold the delete button for this trip
                let createDelBtnDiv = document.createElement('div');
                createDelBtnDiv.setAttribute('class', 'delBtnDiv');
                createSavedDiv.appendChild(createDelBtnDiv);

                // Create a new button element to delete this saved trip
                let createDelBtn = document.createElement('button');
                createDelBtn.setAttribute('class', 'delBtn');
                createDelBtn.innerText = "Delete";
                createDelBtnDiv.appendChild(createDelBtn);

                // Add click event listener to delete button
                createDelBtn.addEventListener('click', function () {
                    // Remove the saved trip from the array of saved trips
                    savedTrips = savedTrips.filter(item => item !== trip);
                    // Update localStorage with the new array of saved trips
                    window.localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
                    // Remove the div containing the saved information and the delete button
                    createSavedDiv.remove();
                    // Check if the savedTrips array is empty and update localStorage accordingly
                    if (savedTrips.length === 0) {
                        window.localStorage.setItem('savedTrips', JSON.stringify([]));
                    }
                    // // Remove the saved trip from saveLi
                    // let saveLi = document.getElementById('saveLi');
                    // if (saveLi) {
                    //     saveLi.remove();
                    // }

                });

                // Create a new div element to hold the saved information for this trip
                let createSavedLiDiv = document.createElement('div');
                createSavedLiDiv.setAttribute('class', 'savedLiDiv');
                createSavedLi.appendChild(createSavedLiDiv);

                // Put the saved information for this trip into the div
                createSavedLiDiv.innerText = trip;

                createSavedLi.addEventListener('click', function () {
                    createSavedLiDiv.style.display = createSavedLiDiv.style.display === "none" ? "block" : "none";
                });
            });
        } else {
            // If there are no saved trips, show a message to the user
            let noSavedTrips = document.createElement('p');
            noSavedTrips.innerText = "You haven't saved any trips yet.";
            savedtrip.appendChild(noSavedTrips);
        }
        // Display the saved trip element
        savedtrip.classList.remove("disnone");
        savedtrip.classList.add("disflex");
    }
}




function displaysave(arrayinfoinput) {

    // let iteminput = window.localStorage.getItem('input')

    //create li to put saved information in container section(container)
    let container = document.getElementById('container');

    //check if saveLi already exists in container
    let saveLi = document.getElementById('saveLi');
    if (!saveLi) {
        //create saveLi element if it doesn't exist
        saveLi = document.createElement('div');
        saveLi.setAttribute('id', 'saveLi');
        container.appendChild(saveLi);
    }

    //create savelicontentholder
    let createconholder = document.createElement('div');
    createconholder.setAttribute('id', 'contholder');
    saveLi.appendChild(createconholder);


    //put selected information in created div
    createconholder.innerText = arrayinfoinput.join(', ');

    // //put selected information in created div
    // let arrayinfo = iteminput;
    // createconholder.innerText = arrayinfo;

}



function createprintbtn() {
    // //create printPDF button in container section(container)
    let saveLi = document.getElementById('saveLi');
    let createPrintBtn = document.createElement('button');
    createPrintBtn.setAttribute('id', 'printbutton');
    saveLi.appendChild(createPrintBtn);
    createPrintBtn.innerText = `Print PDF`;
    //printPDF funtion with click eventlistner
    let prtclick = document.getElementById("printbutton");
    prtclick.addEventListener('click', function printpdf() {
        const printarea = document.getElementById('saveLi');
        let printwindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        printwindow.document.write(`<html><head><title>My Trip</title>`);
        printwindow.document.write('</head><body >');
        printwindow.document.write(printarea.innerHTML);
        printwindow.document.write('</body></html>');
        printwindow.document.close();
        printwindow.print();
    });
}

function createdelbtn() {
    //create remove button in container section(container)
    let saveLi = document.getElementById('saveLi');

    let createRmvBtn = document.createElement('button');
    createRmvBtn.setAttribute('id', 'remove');
    saveLi.appendChild(createRmvBtn);
    createRmvBtn.innerText = `Remove`;
    let rmvclick = document.getElementById("remove")
    rmvclick.setAttribute('class', 'remove');
    // rmvclick.addEventListener('click', function () { saveLi.remove() }
    // );
    let container = document.getElementById('container');


    container.addEventListener('click', function deleteitem(event) {
        if (event.target.tagName === 'BUTTON') {
            if (event.target.id === 'remove') {
                let targetli = event.target.parentNode;
                let containertarget = targetli.parentNode;

                containertarget.removeChild(targetli);
                document.getElementById("savebtn").disabled = false;
            }

        }
    }

    )
}

module.exports = {
    store,
    showSavedTrip

};
