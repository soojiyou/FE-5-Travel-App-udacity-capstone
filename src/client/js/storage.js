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

    let arrayinfoinput =
        `${item1} ${item3}`;

    let saveLi = document.getElementById('saveLi');
    let item = window.localStorage.setItem('input', JSON.stringify(arrayinfoinput));
    let svbtn = document.getElementById("savebtn");
    if (!document.getElementById("saveLi")) {
        svbtn.disabled = false;
    } else { svbtn.disabled = true; }
    displaysave(item);
    createdelbtn();
    createprintbtn();


}

//function to show saved trips after refresh or something

function showSavedTrip() {

    //make saved trip visible after click
    let savedtrip = document.getElementById('savedtrip');

    savedtrip.classList.add("disflex");

    let iteminput = window.localStorage.getItem('input')



    //create div to show saved information in savedtrip
    let container = document.getElementById('savedtrip');
    let createSavedLi = document.createElement('div');
    createSavedLi.setAttribute('id', 'savedLi');
    container.appendChild(createSavedLi);

    let savedLi = document.getElementById('savedLi');

    //create savelicontentholder
    let createconholder = document.createElement('div');
    createconholder.setAttribute('id', 'contholder');
    savedLi.appendChild(createconholder);


    //put selected information in created div
    let arrayinfo = iteminput;
    createconholder.innerText = arrayinfo;


}

//create save div and buttons (delete, printPDF)
function displaysave() {

    let iteminput = window.localStorage.getItem('input')



    //create li to put saved information in container section(container)
    let container = document.getElementById('container');
    let createSavLi = document.createElement('div');
    createSavLi.setAttribute('id', 'saveLi');
    container.appendChild(createSavLi);

    let saveLi = document.getElementById('saveLi');

    //create savelicontentholder
    let createconholder = document.createElement('div');
    createconholder.setAttribute('id', 'contholder');
    saveLi.appendChild(createconholder);


    //put selected information in created div
    let arrayinfo = iteminput;
    createconholder.innerText = arrayinfo;



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