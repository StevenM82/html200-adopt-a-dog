/*let breed = "Breed: Dog";
    let parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>
    let name = parent[1].children[1].textContent; //.children[1] gives "name"
    let information = parent[1].children[2].textContent; //.children[2] gives "cost to adopt: $123.45"
    let adoptInfo = information.replace('$', '');
    let newInfo = adoptInfo.split(' ');
    let adoptFee = Number(newInfo[3]); //presently set to $123.45 per dog

function infoAboutDogs(thisDog) {

}

function dogNames(theseDogs) {
//make parent[] increment by 1 until it reaches the end of the article length
    for(let count = 0; count <= parent.length; count++) {

        console.log(parent);
    }
}

    console.log(parent);
    console.log(parent.length);
    console.log(parent[1].children[1].textContent);
    console.log(parent[1].children[2].textContent);
    console.log(parent[2].children[1].textContent);
    console.log(parent[2].children[2].textContent);

//alert(`Murphy \n${breed} \n$123.45`);

    let x;
    let y;

    switch (parent.textContent) {
        case 0:  
            id = "murphy";
            alert(`Murphy \n${breed} \n$123.45`); //alerts name, breed and cost to adopt in a column format
            break;

        case 1:
            id = "poppy"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 2:
            id = "jack"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 3:
            id = "duffy"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 4:
            id = "lucas"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 5:
            id = "jake"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 6:
            id = "angus"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 7:
            id = "violet"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 8:
            id = "piper"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 9:
            id = "maximus"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 10:
            id = "luna"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;

        case 11:
            id = "stella"
            alert(`Poppy \n${breed} \n$123.45`); 
            break;
    }*/


function runningTotal(total) {
    let dogAlreadySelected = false;
    let previousTotal = 0;
    let currentTotal = 0; 
    
    if (dogAlreadySelected == false) {
        currentTotal = previousTotal + 123.45;
        
        dogAlreadySelected = true;
        previousTotal = currentTotal;
        
    } else { console.log("Curses! Foiled again!!!") 
    } 
    console.log(currentTotal);
} 
