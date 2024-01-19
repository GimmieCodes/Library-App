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
        titleCard.textContent = `"${lib[i].title}"`
        authorCard.textContent = `by ${lib[i].author}`
        pagesCard.textContent = `${lib[i].pages} Pages`
        readCard.textContent = `${lib[i].read}`
        cardRemoveBtn.textContent = "Remove"
        card.dataset.card = [i]
        main.appendChild(card)
        card.classList.add(`card`)
        readCard.classList.add(`readBtn`)
        cardRemoveBtn.classList.add(`cardRemoveBtn`)
        card.appendChild(titleCard)
        card.appendChild(authorCard)
        card.appendChild(pagesCard)
        card.appendChild(readCard)
        card.appendChild(cardRemoveBtn)
        readCard.addEventListener('click',function(){
            if (readCard.textContent == "Read"){
                return readCard.textContent = "Not Read"
            }else if(readCard.textContent == "Not Read"){
                    return readCard.textContent = "Read"
                
            }
        })
        cardRemoveBtn.addEventListener('click',function(){
            const removeIndex = card.dataset.card
            lib.splice(removeIndex,1)
            displayBookToLibrary();
       })

    }
}
const addBookPromptButton = document.querySelector(".addBookPromptButton")
const closePrompt = document.getElementById("closePrompt")
const body = document.querySelector(".body")
const cardRemoveBtn = document.querySelector(".cardRemoveBtn")



document.querySelector(".submitBtn").addEventListener("click",function(event){
    event.preventDefault()
    const title = document.getElementById("bookName")
    const author = document.getElementById("bookAuthor")
    const pages = document.getElementById("bookPages")
    if (title.value !== "" && author.value !== "" && pages.value !== ""){
    readCheck()
    addBookToLibrary(title.value,author.value,pages.value,read)
    document.getElementById('bookPrompt').style.display='none';
    document.getElementById('backgroundPrompt').style.display='none'
    clearPrompt()
    title.classList.remove("inputError")
    author.classList.remove("inputError")
    pages.classList.remove("inputError")
    }else{
        
        title.classList.add("inputError")
        author.classList.add("inputError")
        pages.classList.add("inputError")
    }
})

function clearPrompt(){
    const title = document.getElementById("bookName")
    const author = document.getElementById("bookAuthor")
    const pages = document.getElementById("bookPages")
    const read = document.getElementById("bookReadStatus")
    title.value = ""
    author.value = ""
    pages.value = ""
    read.checked = false
}

let read = document.getElementById("bookReadStatus")

function readCheck(){
    
    
    if (read.checked == true){
         return read = "Read"
         
    }else{
       return read = "Not Read"
    }
}

addBookPromptButton.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='block';
    document.getElementById('backgroundPrompt').style.display='block';

})
closePrompt.addEventListener('click',function(){
    document.getElementById('bookPrompt').style.display='none';
    document.getElementById('backgroundPrompt').style.display='none';
    clearPrompt()
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