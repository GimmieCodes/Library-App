function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} , ${this.read}`
    }
}

let lib = []

const main = document.querySelector(".main")

function addBookToLibrary(title,author,pages,read){
    lib.push(new Book(title,author,pages,read))
    displayBookToLibrary()
}



function displayBookToLibrary(){
    main.innerHTML = '';
    for(let i = 0; i < lib.length; i++){
        const titleCard = document.createElement("h2")
        const authorCard = document.createElement("h2")
        const pagesCard = document.createElement("h2")
        const readCard = document.createElement("button")
        const card = document.createElement("div")
        const cardRemoveBtn = document.createElement("button")
        const readBtn = document.querySelector(".readBtn")
        titleCard.textContent = `"${lib[i].title}"`
        authorCard.textContent = `by ${lib[i].author}`
        pagesCard.textContent = `${lib[i].pages} Pages`
        readCard.textContent = `${lib[i].read}`
        cardRemoveBtn.textContent = "remove"
        main.appendChild(card)
        card.classList.add(`card`)
        readCard.classList.add(`readBtn`)
        card.appendChild(titleCard)
        card.appendChild(authorCard)
        card.appendChild(pagesCard)
        card.appendChild(readCard)
        card.appendChild(cardRemoveBtn)
        

    }
}
const addBookPromptButton = document.querySelector(".addBookPromptButton")
const closePrompt = document.getElementById("closePrompt")
const body = document.querySelector(".body")

document.querySelector(".submitBtn").addEventListener("click",function(event){
    event.preventDefault()
    const title = document.getElementById("bookName").value
    const author = document.getElementById("bookAuthor").value
    const pages = document.getElementById("bookPages").value
    readCheck()
    addBookToLibrary(title,author,pages,read)
    document.getElementById('bookPrompt').style.display='none';
})
let read = document.getElementById("bookReadStatus")
function readCheck(){
    const pages = document.getElementById("bookPages").value
    
    if (read.checked == true){
         return read = "Has Read"
         
    }else{
       return read = "Has not Read"
    }
}
addBookPromptButton.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='block';

})
closePrompt.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='none';
})

displayBookToLibrary()


console.log(lib)

//main.appendChild(card)
//const book = new Book(title,author,pages,read)
//const titleCard = document.createElement("h2")
//titleCard.textContent = `${book.title}`;
//card.appendChild(titleCard)

//main.addEventListener('click',function(){
   // if(event.target.classList.contains('readBtn')){
    //    return read = "Has not Read"
  //  }
//})