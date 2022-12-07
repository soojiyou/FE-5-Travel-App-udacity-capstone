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
    ////고치기////
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
    // storage(arrayinfoinput);
    //console.log(storage);


}



// function storage(arrayinfoinput) {

//     let storage = [];
//     let arrformatinfor = arrayinfoinput;
//     const savebtn = document.getElementById('savebtn');
//     savebtn.onclick(function () {
//         let item = window.localStorage.setItem('input', JSON.stringify(arrformatinfor));
//         storage.push(item);
//     })


//     console.log(storage);
//     return storage;
// }


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


    //let arrformatinfo = { arrayinfo };
    //console.log('arrayinfo is', arrformatinfo);

    //return arrformatinfo;

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

// function printpdf() {
//     const printarea = document.getElementById('saveLi');
//     let printwindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
//     printwindow.document.write(`<html><head><title>My Trip</title>`);
//     printwindow.document.write('</head><body >');
//     printwindow.document.write(printarea.innerHTML);
//     printwindow.document.write('</body></html>');
//     printwindow.document.close();
//     printwindow.print();
// }

// function deleteitem(event) {
//     if (event.target.tagName === 'button') {
//         if (event.target.id === 'remove') {
//             let targetli = event.target.parentNode;
//             let containertarget = targetli.parentNode;

//             containertarget.removeChild(targetli);
//         }

//     }
// }



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
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<div id="content">
  <button type="button" class="buttonImgTop cross" id="cross">X</button>
  <div id="ValuWrapper"> 
    ...content comes here... <br/>
    ...content comes here... <br/>
  </div>
</div>
<button type="button" class="buttonImg" id="repeat">Add</button> */}
// $(function () {
//     var $original = $('#ValuWrapper'),
//         $crossButton = $('#cross'),
//         $content = $("#content");

//     $content.on("click", ".cross", function () {
//         if ($(this).is("#cross")) return false;
//         var $cross = $(this);
//         $(this).next().slideUp(400, function () {
//             $(this).remove();
//             $cross.remove();
//         });
//     });

//     $("#repeat").on("click", function () {
//         $content.append($crossButton.clone(true).removeAttr("id"));
//         $content.append(
//             $original.clone(true)
//                 .hide() // if sliding
//                 .attr("id", $original.attr("id") + $content.find("button.cross").length)
//                 .slideDown("slow") // does not slide much so remove if you do not like it
//         );
//     });

// });

module.exports = {
    store,

};