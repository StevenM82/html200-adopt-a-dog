let name;
let breed = "Breed: Dog";
let adoptFee;
let parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>


function infoAboutDogs(thisDog) {
    name = parent[2].children[1].textContent; //gives the content of <h3> of the <article> element
    information = parent[1].children[2].textContent; //gives the content of the first <p> element

    if (name == "Poppy") {
        alert(`${name} \n${breed} \n${information}`); //alerts name, breed and cost to adopt in a column format
    } 

    console.log(name);
    console.log(parent);
}
//This requires me to pass static information to the function in the script...


/* This would get the information from any <article>
article -> 
    class="article-" -> (articles 0 - 12)
        children -> 
            children element[1] <h3> -> .textContent  "name"
            children element[2] <p> -> .textContent   "cost to adopt: 123.45"
                .textContent (convert the text from children element[2] into an array) .split()
                take the last item from that array and convert it to a number. Number(adoptFee)

*/

let information = parent[1].children[2].textContent;
moreInfo = information.replace('$', '');
console.log(moreInfo);

newInfo = moreInfo.split(' ');
console.log(newInfo);
console.log(newInfo[3]);

moreNewInfo = Number(newInfo[3]);
console.log(moreNewInfo);
console.log(moreNewInfo + moreNewInfo);




function runningTotal(total) {
    
}

let currentAmount = 0; 
    let input = 0;