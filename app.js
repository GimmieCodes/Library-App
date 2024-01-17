function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

let lib = [{title:"awesome book",author:"awesome writer dude",pages:"21",read:"read"}]

const main = document.querySelector(".main")

function addBookToLibrary(title,author,pages,read){

    lib.push(new Book(title,author,pages,read))


}

addBookToLibrary("The Hobbit","J.R.R. Tolkien","295 pages","not read")

function displayBookToLibrary(){
    for(let i = 0; i < lib.length; i++){
        const titleCard = document.createElement("h2")
        const authorCard = document.createElement("h2")
        const pagesCard = document.createElement("h2")
        const readCard = document.createElement("h2")
        const card = document.createElement("div")
        const cardReadBtn = document.createElement("button")
        const cardRemoveBtn = document.createElement("button")
        titleCard.textContent = `${lib[i].title}`
        authorCard.textContent = `by ${lib[i].author}`
        pagesCard.textContent = `${lib[i].pages}`
        readCard.textContent = `by ${lib[i].read}`
        cardReadBtn.textContent = "Read"
        cardRemoveBtn.textContent = "remove"
        main.appendChild(card)
        card.classList.add(`card`)
        card.appendChild(titleCard)
        card.appendChild(authorCard)
        card.appendChild(pagesCard)
        card.appendChild(readCard)
        card.appendChild(cardReadBtn)
        card.appendChild(cardRemoveBtn)

    }
}
displayBookToLibrary()
const addBookPromptButton = document.querySelector(".addBookPromptButton")
const closePrompt = document.getElementById("closePrompt")
const body = document.querySelector(".body")

document.querySelector(".submitBtn").addEventListener("click",function(event){
    event.preventDefault()
})

addBookPromptButton.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='block';

})
closePrompt.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='none';
})
console.log(lib)

//main.appendChild(card)
//const book = new Book(title,author,pages,read)
//const titleCard = document.createElement("h2")
//titleCard.textContent = `${book.title}`;
//card.appendChild(titleCard)