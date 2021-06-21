function infoAboutDogs(thisDog) {
    let breed = "Breed: Dog";
    let parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>
    let name = parent[2].children[1].textContent; //.children[1] gives "name"
    let information = parent[1].children[2].textContent; //.children[2] gives "cost to adopt: $123.45"
    let adoptInfo = information.replace('$', '');
    let newInfo = adoptInfo.split(' ');
    let adoptFee = Number(newInfo[3]); //presently set to $123.45 per dog

    console.log(parent);
    
    if (name == "Poppy") {
        alert(`${name} \n${breed} \n${information}`); //alerts name, breed and cost to adopt in a column format
    } else {
        alert("nothing");
    }

}
//This requires me to pass static information to the function in the script...


function runningTotal(total) {
    dogAlreadySelected = false;
    dogs = document.getElementsByClassName("adopt");
    console.log(dogs);

    let previousTotal = 0;
    let currentTotal = 0; 
    //alert(currentTotal);


    
}
