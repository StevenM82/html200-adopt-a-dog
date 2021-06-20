let name = "dog1";
let breed = "dog2";
let adoptFee = 123.45;
let blah;

function infoAboutDogs(thisDog) {
    parent = document.getElementsByTagName("article"); //shows how many elements of tag <article>
        //parent = document.getElementsByTagName("article")[1]; references the second artical information
    let result = parent.textContent; //shows all of the text for a given article. have to pass a specific article to it
    blah = document.getElementsByClassName("article-1");
    //alert(`${name} ${breed} ${adoptFee}`);
    //alert(result);
    console.log(parent);
    //console.log(blah);
    console.log(result);
}

/* This would get the information from any <article>
article -> 
    class="article-" -> (articles 1 - 8)
        children -> 
            children element[1] <h3> -> .innerText  "name"
            children element[2] <p> -> .innerText   "cost to adopt: 123.45"
                .innerText (convert the text from children element[2] into an array) .split()
                (take the last item from that array)

*/

function runningTotal(total) {
    let currentAmount = 0; 
    let input = 0;
}

