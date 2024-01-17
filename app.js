function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

let lib = []

const main = document.querySelector(".main")

function addBookToLibrary(title,author,pages,read){

    lib.push(new Book(title,author,pages,read))


}

addBookToLibrary("The Hobbit","J.R.R. Tolkien","295 pages","not read")

function displayBookToLibrary(){
    const titleCard = document.createElement("h2")
    for(let i = 0; i < lib.length; i++){
        titleCard.textContent = `${lib[i].title} by ${lib[i].author}, ${lib[i].pages}, ${lib[i].read}`
        main.appendChild(titleCard)

    }
}
displayBookToLibrary()
const addBookPromptButton = document.querySelector(".addBookPromptButton")
const closePrompt = document.getElementById("closePrompt")
const body = document.querySelector("body")

addBookPromptButton.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='block';

})
closePrompt.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='none';
})


//main.appendChild(card)
//const book = new Book(title,author,pages,read)
//const titleCard = document.createElement("h2")
//titleCard.textContent = `${book.title}`;
//card.appendChild(titleCard)