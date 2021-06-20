let name;
let breed = "Breed: Dog";
let adoptFee;
let parent;

function infoAboutDogs(thisDog) {
    parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>
    
    name = parent[2].children[1].textContent; //gives me the content of <h3> of the <article> element!!
    parented2 = parent[1].children[2].textContent;

    if (name == "Poppy") {
        alert(`${name} \n${breed} \n${parented2}`); //alerts name, breed and cost to adopt
    } 
    console.log(name);
    console.log(parent);
}

/* This would get the information from any <article>
article -> 
    class="article-" -> (articles 0 - 12)
        children -> 
            children element[1] <h3> -> .innerText  "name"
            children element[2] <p> -> .innerText   "cost to adopt: 123.45"
                .innerText (convert the text from children element[2] into an array) .split()
                take the last item from that array and convert it to a number. Number(adoptFee)

*/

function runningTotal(total) {
    let currentAmount = 0; 
    let input = 0;
}

