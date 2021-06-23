function infoAboutDogs(thisDog) {
    let breed = "Breed: Dog";
    let parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>
    /*let name = parent[0].children[1].textContent; //.children[1] gives "name"
    let information = parent[1].children[2].textContent; //.children[2] gives "cost to adopt: $123.45"
    let adoptInfo = information.replace('$', '');
    let newInfo = adoptInfo.split(' ');
    let adoptFee = Number(newInfo[3]); //presently set to $123.45 per dog
    */
    
     let name = document.getElementById("Murphy");
        alert(`Murphy \n${breed} \n123.45`); //alerts name, breed and cost to adopt in a column format
    

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

/*

for(i = 0; i < 5; i++) {
            name = parent[i].children[1].textContent;
            console.log(name);
        } 

*/


